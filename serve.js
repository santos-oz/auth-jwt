import express from "express";
import jwt from "jsonwebtoken";
import usuarios from "./usuarios.js"; // importando o array de usuários do arquivo usuario.js
import "dotenv/config"; // importando o dotenv para acessar as variáveis de ambiente

const app = express();
const PORT = process.env.PORT; // porta do servidor
const SECRET_KEY = process.env.SECRET_KEY;
app.use(express.json()); // permitir que o servidor entenda requisições com JSON

app.post("/login", (req, res) => {  //método POST para a rota /login, que recebe os dados do usuário e verifica se ele está cadastrado no array de usuários. Se o usuário for encontrado e a senha estiver correta, o servidor gera um token JWT e retorna para o usuário. Caso contrário, retorna uma mensagem de erro.

  const { username, password } = req.body; //armazenando os dados do usuário que está tentando logar
  const usuario = usuarios.find(
    (user) => user.username === username && user.password === password,
  ); //encontrar o usuário no array de usuários e se a senha é igual a passwoerd
  //Outra forma e fazer    =   function (user) { return user.username === username && user.password === password;},

  if (usuario) { // se o usuário for encontrado e a senha for igual a password ele irá gerar um token JWT com as informações do usuário e a chave secreta definida na variável de ambiente SECRET_KEY. O token terá um tempo de expiração de 1 hora. Em seguida, o servidor retorna o token para o usuário com um status 200. Se o usuário não for encontrado ou a senha estiver incorreta, o servidor retorna uma mensagem de erro com status 401. 
    const token = jwt.sign(
      {
        id: usuario.id,
        username: usuario.username,
        role: usuario.role,
      }, // informações que serão armazenadas no token
      SECRET_KEY, // chave secreta para gerar o token
      { expiresIn: "1h" }, // tempo de expiração do token
    );
    res.status(200).json({ message: token }); //retorna o token para o usuário
  } else {
    res.status(401).json({ menssage: "Usuário ou senha inválidos" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
