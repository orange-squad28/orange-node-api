import cursos from '../models/Cursos.js';

class CursosController {
    static listarCursos(req, res) {
        cursos.find((err, cursos) => {
            res.status(200).json(cursos);
        });
    }

    static listarCursoPorId(req, res) {
        const id = req.params.id;
        cursos.findById(id, (err, curso) => {
            if (err) {
                res.status(400).send({ message: `${err.message}: Erro ao buscar curso` });
            }
            res.status(200).send(curso);
        });
    }

    static cadastrarCurso(req, res) {
        let curso = new cursos(req.body);

        curso.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message}Erro ao cadastrar curso` });
            }
            res.status(201).send(curso.toJSON());
        });
    }

    static atualizarCurso(req, res) {
        const id = req.params.id;
        const cursoAtualizado = req.body;

        cursos.findByIdAndUpdate(id, { $set: cursoAtualizado }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Curso atualizado com sucesso!" });
            } else {
                res.status(400).send({ message: `${err.message}: Erro ao atualizar curso` });
            }
        });
    }

    static apagarCurso(req, res) {
        const id = req.params.id;

        cursos.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message}: Erro ao apagada curso` });
            }
            res.status(200).send({ message: "Curso apagado com sucesso!" });
        });
    }
    

}

export default CursosController;

