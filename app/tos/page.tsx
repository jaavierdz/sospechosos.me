export default function TOSPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6">Términos de Servicio</h1>

            <div className="max-w-3xl text-gray-300 space-y-4">

                <p>
                    Bienvenido a <strong>Sospechosos.me</strong>. Al acceder y utilizar esta plataforma, usted acepta cumplir con estos Términos de Servicio y con todas las leyes aplicables.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Uso permitido</h2>
                <p>
                    La plataforma se proporciona únicamente para fines de entretenimiento y participación comunitaria. Los usuarios se comprometen a no utilizar la web para actividades ilegales, difamatorias o que infrinjan derechos de terceros.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Contenido generado por usuarios</h2>
                <p>
                    Todo contenido publicado por los usuarios (comentarios, reportes) es responsabilidad exclusiva del autor. La plataforma se reserva el derecho de eliminar cualquier contenido que considere inapropiado, ofensivo o que incumpla estos Términos.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Derechos de propiedad intelectual</h2>
                <p>
                    Todo el contenido de la plataforma, incluyendo diseño, código, gráficos y textos, es propiedad de Javier Rodríguez-Alarcón Iglesias o de terceros con licencia. Queda prohibida la reproducción, distribución o explotación comercial sin autorización expresa.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Limitación de responsabilidad</h2>
                <p>
                    La plataforma se ofrece \&#34;tal cual\&#34; y no garantiza la exactitud, integridad o disponibilidad continua del servicio. No se responsabiliza de daños directos o indirectos derivados del uso de la web o de la información publicada por terceros.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Enlaces a terceros</h2>
                <p>
                    La plataforma puede contener enlaces a sitios externos. No asumimos responsabilidad por el contenido, políticas de privacidad o prácticas de terceros.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Protección de datos</h2>
                <p>
                    Para información sobre cómo recopilamos y tratamos los datos, consulte nuestra <a href="/privacidad" className="underline text-pink-400">Política de Privacidad</a>.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Menores de edad</h2>
                <p>
                    El uso de la plataforma está restringido a mayores de 14 años, o menores con consentimiento parental.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Modificaciones de los Términos</h2>
                <p>
                    Nos reservamos el derecho de actualizar estos Términos de Servicio en cualquier momento. Las modificaciones se publicarán en esta página con la fecha de última actualización.
                </p>

                <p className="text-sm text-gray-500 mt-4">
                    Última actualización: {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}
