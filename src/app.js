import express from "express";
import dbTrilhas from "./config/conexaoBD.js";
import trilhas from "./models/Trilha.js";
import routes from "./routes/index.js";


//conexao com o banco de dados
dbTrilhas.on("error", console.error.bind(console, "Erro de Conexão:"));
dbTrilhas.once("open", () => {
  console.log("Conectado ao MongoDB Atlas");
});

const app = express();

app.use(express.json());

routes(app);

app.get("/", (req, res) => {
  res.status(200).send("Orange Evolution");
});


export default app;
