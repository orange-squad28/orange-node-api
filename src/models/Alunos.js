import mongoose from "mongoose";


const alunoSchema = new mongoose.Schema(
    {
        id : {type: String},
        nome : {type: String, required: true},
        email : {type: String, required: true},
        senha : {type: String, required: true},
        cursos: {type: Array},
    });

const alunos = mongoose.model("alunos", alunoSchema);

export default alunos;
    