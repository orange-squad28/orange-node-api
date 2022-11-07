import mongoose from "mongoose";

mongoose.connect('mongodb+srv://admin:1234@dominio.keihku7.mongodb.net/orange-evolution')

let dbTrilhas = mongoose.connection;

export default dbTrilhas;