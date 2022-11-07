import express from "express";


const app = express();

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

export default app;