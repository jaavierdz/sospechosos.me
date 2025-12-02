// app/api/cases/route.ts
import dbConnect from '@/app/lib/db';
import Case from '@/app/models/Case';

// GET: obtener los últimos 50 casos
export async function GET() {
    try {
        await dbConnect();
        const cases = await Case.find().sort({ fecha: -1 }).limit(50);
        return new Response(JSON.stringify(cases), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Error al cargar casos' }), { status: 500 });
    }
}

// POST: crear un nuevo caso
export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();
        if (!body.instagram || !body.comentario || !body.rating) {
            return new Response(JSON.stringify({ error: 'Campos incompletos' }), { status: 400 });
        }
        const nuevo = await Case.create({
            instagram: body.instagram,
            comentario: body.comentario,
            rating: body.rating,
        });
        return new Response(JSON.stringify(nuevo), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Error al crear caso' }), { status: 500 });
    }

}

export async function PATCH(req: Request) {
    try {
        await dbConnect();
        const { caseId, usuario, mensaje } = await req.json();

        if (!caseId || !usuario || !mensaje) {
            return new Response(JSON.stringify({ error: 'Campos incompletos' }), { status: 400 });
        }

        const caso = await Case.findById(caseId);
        if (!caso) return new Response(JSON.stringify({ error: 'Caso no encontrado' }), { status: 404 });

        caso.comentarios.push({ usuario, mensaje });
        await caso.save();

        return new Response(JSON.stringify(caso), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Error al añadir comentario' }), { status: 500 });
    }
}