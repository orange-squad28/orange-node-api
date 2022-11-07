import mongoose from "mongoose";

mongoose.connect('mongodb+srv://admin:1234@dominio.keihku7.mongodb.net/?retryWrites=true&w=majority')

let dbTrilhas = mongoose.connection;

export default dbTrilhas;