import express from "express";
import LoginController from "../controller/loginController.js";

const router = express.Router();

router.get("/login", LoginController.logar);

export default router;
