import express from 'express';
const app = express();

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/conteudo-site/index.html');
});

app.get('/produtos', (req, res) => {
    res.status(200).sendFile(__dirname + '/conteudo-site/produtos.html');
});

app.get('/sobre', (req, res) => {
    res.status(200).sendFile(__dirname + '/conteudo-site/sobre.html');
});

const porta = 3000;
app.listen(porta, () => {
    console.log("Servidor rodando em http://localhost:3000");
});