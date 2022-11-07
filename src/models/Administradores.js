import mongoose from "mongoose";


const administradoresSchema = new mongoose.Schema(
    {
        id : {type: String},
        nome : {type: String, required: true},
        email : {type: String, required: true},
        senha : {type: String, required: true},
        cargo: {type: String, required: true}
    });

const administradores = mongoose.model("administradores", administradoresSchema);

