import mongoose from "mongoose";

const trilhaSchema = new mongoose.Schema(
    {
        id : {type: String},
        titulo : {type: String, required: true},
        cursos : [{type: mongoose.Schema.Types.ObjectId, ref: 'cursos', required: true}],
        descricao : {type: String, required: true},
        topicos : [{type: String, required: true}],
        imagem : {type: String, required: true},
        descritivoDaImagem : {type: String, required: true},
        autor: {type: String, required: true},
        estaAtivo: {type: Boolean, required: true},
        dataCriacao: {type: Date},
        dataAtualizacao: {type: Date},
        numeroDeHoras: {type: Number},
    });

const trilhas = mongoose.model("trilhas", trilhaSchema);

export default trilhas;