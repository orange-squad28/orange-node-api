import express from 'express';
import AlunosController from '../controller/alunosController.js';

const router = express.Router();

router
    .get('/alunos', AlunosController.listarAlunos)
    .get('/alunos/:id', AlunosController.listarAlunoPorId)
    .post('/alunos', AlunosController.cadastrarAluno)
    .put('/alunos/:id', AlunosController.atualizarAluno)
    .delete('/alunos/:id', AlunosController.apagarAluno);


export default router;
