import mongoose from "mongoose";

const trilhaSchema = new mongoose.Schema(
    {
        id : {type: String},
        titulo : {type: String, required: true},
        cursos : {type: Array,required: true},
        autor: {type: String, required: true},
        estaAtivo: {type: Boolean, required: true},
        dataCriacao: {type: Date, required: true},
        dataAtualizacao: {type: Date, required: true},
        numeroDeHoras: {type: Number, required: true},
    });

const trilhas = mongoose.model("trilhas", trilhaSchema);

export default trilhas;