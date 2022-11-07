import express from "express";
import CursosController from "../controller/cursosController.js";

const router = express.Router();

router
    .get("/cursos", CursosController.listarCursos)
    .get("/cursos/:id", CursosController.listarCursoPorId)
    .post("/cursos", CursosController.cadastrarCurso)
    .put("/cursos/:id", CursosController.atualizarCurso)
    .delete("/cursos/:id", CursosController.apagarCurso);


export default router;