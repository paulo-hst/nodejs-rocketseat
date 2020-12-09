const express = require('express'); // importação do express
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

app.use(cors()); // libera acesso para todos os dominios

// Iniciando o App
const app = express(); // atribuindo o express na variável app

app.use(express.json()); // Permite o envio de dados no formato JSON (API REST)

// Iniciando o Banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', //nodeapi: nome do database/schema
    { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}); 

// Registrar Models na aplicação
// require('./src/models/Products'); - Sem utilizar a biblioteca require-dir
requireDir('./src/models'); // utilizando a biblioteca require-dir

// Rotas
app.use("/api", require("./src/routes")); // adiciona /api/ no link

app.listen(3001); // porta de acesso (localhost/3001)