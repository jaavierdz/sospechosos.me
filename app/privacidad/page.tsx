export default function PrivacidadPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>

            <div className="max-w-3xl text-gray-300 space-y-4">

                <p>
                    En <strong>Sospechosos.me</strong> nos comprometemos a proteger la privacidad de nuestros usuarios.
                    Esta política de privacidad describe cómo recopilamos, usamos y protegemos la información personal y los datos públicos proporcionados en nuestra plataforma de acuerdo con la LOPD (3/2018).
                </p>

                <h2 className="text-2xl font-semibold mt-4">Responsable del tratamiento</h2>
                <p>
                    El responsable del tratamiento de los datos es Javier Rodríguez-Alarcón Iglesias. Puede contactarnos mediante el correo electrónico javier@javierdz.dev.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Datos que recopilamos</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Datos que los usuarios deciden publicar voluntariamente, como comentarios y reportes de cuentas públicas de Instagram.</li>
                    <li>Información técnica de navegación (IP, navegador, fecha/hora) recopilada de forma anonimizada con fines estadísticos y de seguridad.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-4">Finalidad del tratamiento</h2>
                <p>
                    Los datos recopilados se utilizan únicamente para mostrar el contenido reportado en la plataforma y mantener la actividad de la comunidad. No vendemos ni compartimos información personal con terceros.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Base legal</h2>
                <p>
                    La base legal para el tratamiento de datos personales voluntariamente proporcionados por los usuarios es su consentimiento explícito al publicar información en la plataforma.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Derechos de los usuarios</h2>
                <p>
                    Los usuarios pueden ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición al tratamiento de sus datos, enviando una solicitud al responsable del tratamiento a través del correo de contacto.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Conservación de datos</h2>
                <p>
                    Los datos publicados por los usuarios se conservan mientras permanezcan en la plataforma. La información técnica de navegación se conserva de manera anonimizada y durante el tiempo estrictamente necesario para fines estadísticos y de seguridad.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Seguridad</h2>
                <p>
                    Adoptamos medidas técnicas y organizativas adecuadas para proteger los datos frente a pérdida, acceso no autorizado o divulgación indebida.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Enlaces a terceros</h2>
                <p>
                    Nuestra plataforma puede contener enlaces a redes sociales u otros servicios externos. No somos responsables de las políticas de privacidad de terceros y recomendamos revisar sus condiciones.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Menores de edad</h2>
                <p>
                    No se permite el uso de la plataforma por menores de 14 años sin consentimiento de sus padres o tutores legales.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Modificaciones</h2>
                <p>
                    Esta política de privacidad puede actualizarse periódicamente. Los cambios se publicarán en esta página con fecha de última actualización.
                </p>

                <p className="text-sm text-gray-500 mt-4">
                    Última actualización: {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}
