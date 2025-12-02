import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    usuario: { type: String, required: true },
    mensaje: { type: String, required: true },
    fecha: { type: Date, default: Date.now }
});

const caseSchema = new mongoose.Schema({
    instagram: { type: String, required: true },
    comentario: { type: String, required: true },
    rating: { type: Number, required: true },
    fecha: { type: Date, default: Date.now },
    comentarios: [commentSchema] // nuevo campo
});

export default mongoose.models.Case || mongoose.model("Case", caseSchema);
