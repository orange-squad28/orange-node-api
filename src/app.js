import express from "express";
import dbTrilhas from "./config/conexaoBD.js";

dbTrilhas.on("error", console.error.bind(console, "Erro de Conexão:"));
dbTrilhas.once("open", () => {
  console.log("Conectado ao MongoDB Atlas");
});

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Orange Evolution");
});

app.get("/trilhas", (req, res) => {
  res.status(200).json(trilhas);
});

app.get("/trilhas/:id", (req, res) => {
  let indice = buscarTrilhaPorId(req.params.id);

  res.json(trilhas[indice]);
});

app.post("/trilhas", (req, res) => {
  const trilha = req.body;
  trilhas.push(trilha);
  res.status(201).send("Trilha criada com sucesso!");
});

app.put("/trilhas/:id", (req, res) => {
  let indice = buscarTrilhaPorId(req.params.id);
  trilhas[indice].nome = req.body.nome;
  res.json(trilhas);
});

function buscarTrilhaPorId(id) {
  return trilhas.findIndex((trilha) => trilha.id == id);
}

app.delete("/trilhas/:id", (req, res) => {
  let { id } = req.params;
  let indice = buscarTrilhaPorId(id);
  trilhas.splice(indice, 1);
  res.json(`Trilha com id ${id} deletada com sucesso!`);
});

export default app;
