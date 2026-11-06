import express from "express";
import jwt from "jsonwebtoken";
import usuario from "./usuario"; // importando o array de usuários do arquivo usuario.js

const app = express();
const PORT = process.env.PORT || 3000; // porta do servidor
const SECRET = process.env.SECRET_KEY 

app.use(express.json()) // permitir que o servidor entenda requisições com JSON
