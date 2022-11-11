import trilhas from "../models/Trilha.js";
import cursos from '../models/Cursos.js';

class TrilhaController {
  static listarTrilhas(req, res) {
    trilhas
    .find()
    .populate("cursos")
    .exec((err, trilhas) => {
      res.status(200).json(trilhas);
    });
  }

  static listarTrilhaPorId(req, res) {
    const id = req.params.id;
    trilhas.findById(id, (err, trilha) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message}: Erro ao buscar trilha` });
      }
      res.status(200).send(trilha);
    });
  }

  static listarCursosDaTrilha(req, res) {
    const id = req.params.id;

    trilhas.findById(id, (err, trilha) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message}: Erro ao buscar trilha` });
      }
      res
        .status(200)
        .send(trilha.cursos)
        
    });
  }

  static cadastrarTrilha(req, res) {
    let trilha = new trilhas(req.body);

    trilha.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message}Erro ao cadastrar trilha` });
      }
      res.status(201).send(trilha.toJSON());
    });
  }

  static atualizarTrilha(req, res) {
    const id = req.params.id;
    const trilhaAtualizada = req.body;

    trilhas.findByIdAndUpdate(id, { $set: trilhaAtualizada }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Trilha atualizada com sucesso!" });
      } else {
        res
          .status(400)
          .send({ message: `${err.message}: Erro ao atualizar trilha` });
      }
    });
  }

  static inserirCursoNaTrilha(req, res) {
    const idDaTrilha = req.params.id;
    const idDoCurso = req.body.id;

  const curso = cursos.findById(idDoCurso, (err, trilha) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message}: Erro ao buscar trilha` });
      } else {
        return curso;
      }
    });

    trilhas.findByIdAndUpdate(
      idDaTrilha,
      { $push: { cursos: idDoCurso } },
      (err) => {
        if (!err) {
          res.status(200).send({ message: "Curso inserido com sucesso!" });
        } else {
          res.status(400).send({
            message: `${err.message}: Erro ao inserir curso`,
          });
        }
      }
    );
  }


    static apagarTrilha(req, res) {
        const id = req.params.id;

        trilhas.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message}: Erro ao apagada trilha` });
            }
            res.status(200).send({ message: "Trilha apagada com sucesso!" });
        });
    }
}

export default TrilhaController;
