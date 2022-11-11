import express from 'express';
import AlunosController from '../controller/alunosController.js';

const router = express.Router();

router
    .get('/alunos', AlunosController.listarAlunos)
    .get('/alunos/:id', AlunosController.listarAlunoPorId)
    .get('/alunos/trilhas/:id', AlunosController.listarTrilhasDoAluno)
    .post('/alunos', AlunosController.cadastrarAluno)
    .put('/alunos/:id', AlunosController.atualizarAluno)
    .patch('/alunos/matricular/:id', AlunosController.matricularAlunoNaTrilha)
    .delete('/alunos/:id', AlunosController.apagarAluno);


export default router;
