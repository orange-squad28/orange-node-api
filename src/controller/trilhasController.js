import trilhas from "../models/Trilha.js";

class TrilhaController{
    static listarTrilhas(req, res){
        trilhas.find((err, trilhas) => {
            res.status(200).json(trilhas);
        });
    }

}

export default TrilhaController;