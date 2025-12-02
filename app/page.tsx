'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Comentario {
    _id: string;
    usuario: string;
    mensaje: string;
    fecha: string;
}

interface Caso {
    _id: string;
    instagram: string;
    comentario: string;
    rating: number;
    fecha: string;
    comentarios?: Comentario[];
    nuevoComentario?: string;
}

export default function App() {
    const [instagram, setInstagram] = useState("");
    const [comentario, setComentario] = useState("");
    const [rating, setRating] = useState(1);
    const [lista, setLista] = useState<Caso[]>([]);
    const [error, setError] = useState("");

    async function enviar() {
        setError("");
        try {
            const res = await fetch("/api/case", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ instagram, comentario, rating })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Error al enviar.");
                return;
            }
            setInstagram("");
            setComentario("");
            setRating(1);
            cargar();
        } catch (e) {
            setError("Error de conexión.");
        }
    }

    async function cargar() {
        try {
            const res = await fetch("/api/case");
            const data: Caso[] = await res.json();
            setLista(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        cargar();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 flex flex-col items-center gap-10">

            <motion.h1
                className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mt-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Sospechosos.me
            </motion.h1>

            <motion.p
                className="text-gray-300 max-w-xl text-center mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Esta página te permite ver y reportar situaciones de infidelidad de forma anónima. La comunidad puede valorar y comentar los reportes, creando un caos en tiempo real.
            </motion.p>

            {error && (
                <motion.div
                    className="bg-red-600 px-4 py-2 rounded-lg text-sm shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {error}
                </motion.div>
            )}

            <motion.div
                className="bg-gray-800/40 backdrop-blur-xl p-6 rounded-2xl w-full max-w-lg flex flex-col gap-4 border border-gray-700 shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <h2 className="text-xl font-semibold text-pink-400">¿Te han puesto los cuernos?</h2>
                <h3 className="font-semibold text-pink-300">Compártelo aqui</h3>

                <input
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder="@usuario"
                    className="w-full p-3 rounded-xl bg-gray-700 focus:ring-2 ring-pink-500 outline-none shadow-inner"
                />

                <textarea
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    placeholder="Explica el salseo (max 200 caracteres)"
                    className="w-full p-3 rounded-xl bg-gray-700 focus:ring-2 ring-pink-500 outline-none shadow-inner h-28"
                />

                <div className="flex items-center gap-3">
                    <label className="text-gray-300">Rating de los cuernos:</label>
                    <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="bg-gray-700 p-2 rounded-lg focus:ring-2 ring-pink-500"
                    >
                        {[1, 2, 3, 4, 5].map((n) => (
                            <option key={n} value={n}>{n}</option>
                        ))}
                    </select>
                </div>

                <motion.button
                    onClick={enviar}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition p-3 rounded-xl font-bold shadow-xl"
                    whileTap={{ scale: 0.95 }}
                >
                    Enviar
                </motion.button>
            </motion.div>

            <h2 className="text-3xl font-bold mt-6 text-pink-400">Infieles en tiempo real</h2>
            <p className="text-gray-400 text-sm max-w-lg text-center">
                Mira quién ha puesto los cuernos recientemente y qué dice la comunidad.
            </p>

            <div className="flex flex-col gap-4 w-full max-w-lg mt-4">
                {lista.map((item) => (
                    <motion.div
                        key={item._id}
                        className="bg-gray-800/50 backdrop-blur-xl p-4 rounded-2xl border border-gray-700 shadow-xl hover:scale-105 transition-transform"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex justify-between items-center">
                            <a
                                href={`https://instagram.com/${item.instagram.replace(/^@/, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-lg text-pink-400 hover:underline"
                            >
                                {item.instagram}
                            </a>
                            <span className="text-xs text-gray-400">{new Date(item.fecha).toLocaleString()}</span>
                        </div>
                        <p className="text-sm text-gray-300 mt-1">{item.comentario}</p>
                        <span className="text-yellow-400 mt-2 block">★ {item.rating}</span>

                        {/* Comentarios existentes */}
                        <div className="mt-2 space-y-1">
                            {item.comentarios?.map((c) => (
                                <div key={c._id} className="text-sm text-gray-400 pl-2 border-l border-gray-600">
                                    <a href={`https://instagram.com/${c.usuario.replace(/^@/, '')}`} className="font-semibold text-pink-400">{c.usuario}: </a>
                                    {c.mensaje} <span className="text-xs text-gray-500">({new Date(c.fecha).toLocaleString()})</span>
                                </div>
                            ))}
                        </div>

                        {/* Formulario para añadir comentario */}
                        <div className="mt-2 flex gap-2">
                            <input
                                type="text"
                                placeholder="Tu comentario..."
                                className="flex-1 p-2 rounded-xl bg-gray-700 outline-none"
                                value={item.nuevoComentario || ''}
                                onChange={(e) => {
                                    const listaNueva = [...lista];
                                    const idx = listaNueva.findIndex((x) => x._id === item._id);
                                    listaNueva[idx].nuevoComentario = e.target.value;
                                    setLista(listaNueva);
                                }}
                            />
                            <button
                                className="bg-pink-500 px-3 rounded-xl text-white hover:opacity-90"
                                onClick={async () => {
                                    const idx = lista.findIndex((x) => x._id === item._id);
                                    const mensaje = lista[idx].nuevoComentario;
                                    if (!mensaje) return;

                                    try {
                                        const res = await fetch('/api/case', {
                                            method: 'PATCH',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({ caseId: item._id, usuario: 'Anon', mensaje })
                                        });
                                        if (!res.ok) throw new Error('Error al enviar comentario');
                                        const updated = await res.json();
                                        const listaNueva = [...lista];
                                        listaNueva[idx] = updated;
                                        listaNueva[idx].nuevoComentario = '';
                                        setLista(listaNueva);
                                    } catch (e) {
                                        console.error(e);
                                    }
                                }}
                            >
                                Comentar
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <footer className="mt-16 text-gray-500 text-sm flex flex-col items-center gap-2 opacity-70 pb-10">
                <a href="/privacidad" className="hover:text-pink-400 transition">Política de Privacidad</a>
                <a href="/tos" className="hover:text-pink-400 transition">Términos del Servicio</a>
                <a href="/contacto" className="hover:text-pink-400 transition">Contacto</a>
                <p className="text-xs mt-2">© {new Date().getFullYear()} <a href="https://javierdz.dev">Javierdz</a></p>
            </footer>
        </div>
    );
}
