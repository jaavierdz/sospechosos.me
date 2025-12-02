'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactoPage() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [estado, setEstado] = useState<'idle' | 'enviando' | 'exito' | 'error'>('idle');
    const [error, setError] = useState('');

    const enviar = async () => {
        if (!nombre || !email || !mensaje) {
            setError('Por favor completa todos los campos.');
            return;
        }
        setEstado('enviando');
        setError('');
        try {
            const res = await fetch('/api/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre, email, mensaje }),
            });
            if (!res.ok) throw new Error('Error al enviar.');
            setEstado('exito');
            setNombre('');
            setEmail('');
            setMensaje('');
        } catch (e) {
            console.error(e);
            setEstado('error');
            setError('No se pudo enviar el mensaje. Intenta nuevamente.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6">Contacto</h1>

            <div className="max-w-2xl w-full flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="p-3 rounded-xl bg-gray-800 focus:ring-2 ring-pink-500 outline-none"
                />
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 rounded-xl bg-gray-800 focus:ring-2 ring-pink-500 outline-none"
                />
                <textarea
                    placeholder="Mensaje"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    className="p-3 rounded-xl bg-gray-800 focus:ring-2 ring-pink-500 outline-none h-32"
                />

                {error && <p className="text-red-500">{error}</p>}
                {estado === 'exito' && <p className="text-green-400">Mensaje enviado correctamente.</p>}

                <motion.button
                    onClick={enviar}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition p-3 rounded-xl font-bold shadow-xl"
                    whileTap={{ scale: 0.95 }}
                    disabled={estado === 'enviando'}
                >
                    {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
                </motion.button>
            </div>
        </div>
    );
}
