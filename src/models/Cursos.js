
import mongoose from "mongoose";

const cursoSchema = new mongoose.Schema(
    {
        id : {type: String},
        titulo : {type: String, required: true},
        autor: {type: String, required: true},
        imagem: {type: String, required: true},
        descritivoDaImagem : {type: String, required: true},
        estaAtivo: {type: Boolean, required: true},
        estaInicializado: {type: Boolean, required: true},
        estaConcluido: {type: Boolean, required: true},
        origemConteudo: {type: String, required: true},
        dataCriacao: {type: Date},
        dataAtualizacao: {type: Date},
        duracao: {type: Number},
        descricao: {type: String},
        link: {type: String},

    });

const cursos = mongoose.model("cursos", cursoSchema);

export default cursos;