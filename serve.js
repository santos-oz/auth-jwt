import express from "express";
import jwt from "jsonwebtoken";
import usuario from "./usuario.js"; // importando o array de usuários do arquivo usuario.js

const app = express();
const PORT = process.env.PORT; // porta do servidor
const SECRET = process.env.SECRET; 
app.use(express.json()) // permitir que o servidor entenda requisições com JSON

app.post("/login", (req,res) =>{
    const { username, password } = req.body;//armazenando os dados do usuário que está tentando logar
    const usuario= usuarios.find() //encontrar o usuário no array de usuários
});


