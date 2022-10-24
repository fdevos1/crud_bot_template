import express from "express";

const app = express();

const port = process.env.PORT || 3005;

app.use(express.json());

app.listen(port, () => console.log("Servidor rodando na porta 3005"));
