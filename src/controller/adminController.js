import admins from "../models/Administradores.js";

class AdminController {
    static listarAdmins(req, res) {
        admins.find((err, admins) => {
            res.status(200).json(admins);
        });
    }

    static listarAdminPorId(req, res) {
        const id = req.params.id;
        admins.findById(id, (err, admins) => {
            if (err) {
                res
                    .status(400)
                    .send({ message: `${err.message}: Erro ao buscar administrador` });
            }
            res.status(200).send(admins);
        });
    }

    static cadastrarAdmin(req, res) {
        let admin = new admins(req.body);



        admin.save((err) => {
            if (err) {
                res
                    .status(500)
                    .send({ message: `${err.message}Erro ao cadastrar administrador` });
            }
            res.status(201).send(admin.toJSON());
        });
    }

    static atualizarAdmin(req, res) {
        const id = req.params.id;
        const administradorAtualizado = req.body;

        admins.findByIdAndUpdate(id, { $set: administradorAtualizado }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Administrador atualizado com sucesso!" });
            } else {
                res
                    .status(400)
                    .send({ message: `${err.message}: Erro ao atualizar administrador` });
            }
        });
    }

    static apagarAdmin(req, res) {
        const id = req.params.id;

        admins.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message}: Erro ao apagada administrador` });
            }
            res.status(200).send({ message: "Administrador apagado com sucesso!" });
        });
    }

}

export default AdminController;