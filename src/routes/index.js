import express from "express";
import trilhasRoutes from "./trilhasRoutes.js";
import adminRoutes from "./adminRoutes.js";
import alunosRoutes from "./alunosRoutes.js";
import cursosRoutes from "./cursosRoutes.js";

const routes = (app) => {
app.route('/').get((req, res) => {
    res.status(200).send("Orange Evolution - teste de rotas");
});

app.use(
    express.json(),
    trilhasRoutes,
    adminRoutes,
    alunosRoutes,
    cursosRoutes
);

}

export default routes;

