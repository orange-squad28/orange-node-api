import mongoose from "mongoose";

const trilhaSchema = new mongoose.Schema(
    {
        id : {type: String},
        titulo : {type: String, required: true},
        cursos : {type: Array,required: true},
        autor: {type: String, required: true},
        estaAtivo: {type: Boolean, required: true},
        dataCriacao: {type: Date},
        dataAtualizacao: {type: Date},
        numeroDeHoras: {type: Number},
    });

const trilhas = mongoose.model("trilhas", trilhaSchema);

export default trilhas;