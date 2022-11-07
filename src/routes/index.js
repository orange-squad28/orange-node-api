import express from "express";
import trilhasRoutes from "./trilhasRoutes.js";

const routes = (app) => {
app.route('/').get((req, res) => {
    res.status(200).send("Orange Evolution - teste de rotas");
});

app.use(
    express.json(),
    trilhasRoutes
)

}

export default routes;

