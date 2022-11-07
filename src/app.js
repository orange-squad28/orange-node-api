import express from "express";

const app = express();

app.use(express.json());

const trilhas = [
    { id: 1, nome: "Desenvolvimento Fullstack" },
    { id: 2, nome: "UX/UI Design" },
    { id: 3, nome: "QA" }
]

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
    res.status(201).send('Trilha criada com sucesso!');
});

app.put("/trilhas/:id", (req, res) => {
    let indice = buscarTrilhaPorId(req.params.id);
    trilhas[indice].nome = req.body.nome;
    res.json(trilhas);
    
});

function buscarTrilhaPorId(id) {
    return trilhas.findIndex(trilha => trilha.id == id);
}


export default app;