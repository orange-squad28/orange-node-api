import express from 'express';
import AdminController from '../controller/adminController.js';

const router = express.Router();

router
    .get('/admins', AdminController.listarAdmins)
    .get('/admins/:id', AdminController.listarAdminPorId)
    .get('/admins/login/:id', AdminController.souAdmin)
    .post('/admins', AdminController.cadastrarAdmin)
    .put('/admins/:id', AdminController.atualizarAdmin)
    .delete('/admins/:id', AdminController.apagarAdmin);


export default router;
