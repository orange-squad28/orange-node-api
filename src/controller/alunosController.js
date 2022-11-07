import alunos from "../models/Alunos.js";

class AlunosController {
    static listarAlunos(req, res) {
        alunos.find((err, alunos) => {
            res.status(200).json(alunos);
        });
    }

    static listarAlunoPorId(req, res) {
        const id = req.params.id;
        alunos.findById(id, (err, alunos) => {
            if (err) {
                res
                    .status(400)
                    .send({ message: `${err.message}: Erro ao buscar aluno` });
            }
            res.status(200).send(alunos);
        });
    }

    static cadastrarAluno(req, res) {
        let aluno = new alunos(req.body);

        aluno.save((err) => {
            if (err) {
                res
                    .status(500)
                    .send({ message: `${err.message}Erro ao cadastrar aluno` });
            }
            res.status(201).send(aluno.toJSON());
        });
    }

    static atualizarAluno(req, res) {
        const id = req.params.id;
        const alunoAtualizado = req.body;

        alunos.findByIdAndUpdate(id, { $set: alunoAtualizado }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Aluno atualizado com sucesso!" });
            } else {
                res
                    .status(400)
                    .send({ message: `${err.message}: Erro ao atualizar aluno` });
            }
        });
    }


    static apagarAluno(req, res) {
        const id = req.params.id;

        alunos.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message}: Erro ao apagada aluno` });
            }
            res.status(200).send({ message: "Aluno apagado com sucesso!" });
        });
    }
}

export default AlunosController;