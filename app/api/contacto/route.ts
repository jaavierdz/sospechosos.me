import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { nombre, email, mensaje } = await req.json();

        if (!nombre || !email || !mensaje) {
            return new Response(JSON.stringify({ error: 'Campos incompletos' }), { status: 400 });
        }

        // Configura nodemailer con tu SMTP o servicio (SendGrid, Gmail, etc.)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Contacto Salseómetro" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
            subject: `Nuevo mensaje de ${nombre}`,
            text: `De: ${nombre} <${email}>\n\n${mensaje}`,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'No se pudo enviar el mensaje.' }), { status: 500 });
    }
}
