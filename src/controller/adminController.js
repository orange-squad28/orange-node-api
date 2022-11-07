import administradores from "../models/Administradores.js";

class AdminController {
    static listarAdmins(req, res) {
        administradores.find((err, administradores) => {
            res.status(200).json(administradores);
        });
    }

    static listarAdminPorId(req, res) {
        const id = req.params.id;
        administradores.findById(id, (err, administrador) => {
            if (err) {
                res
                    .status(400)
                    .send({ message: `${err.message}: Erro ao buscar administrador` });
            }
            res.status(200).send(administrador);
        });
    }

    static cadastrarAdmin(req, res) {
        let administrador = new administradores(req.body);

        administrador.save((err) => {
            if (err) {
                res
                    .status(500)
                    .send({ message: `${err.message}Erro ao cadastrar administrador` });
            }
            res.status(201).send(administrador.toJSON());
        });
    }

    static atualizarAdmin(req, res) {
        const id = req.params.id;
        const administradorAtualizado = req.body;

        administradores.findByIdAndUpdate(id, { $set: administradorAtualizado }, (err) => {
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

        administradores.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message}: Erro ao apagada administrador` });
            }
            res.status(200).send({ message: "Administrador apagado com sucesso!" });
        });
    }

}

export default AdminController;