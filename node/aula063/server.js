const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Olá...s');
});

app.get('/contato', (req, res) => {
    res.send('Nossos contatos');
});
app.get('/form', (req, res) => {
    res.send('<form action="/" method="POST"> Nome: <input type="text" name="nome"> <button>Enviar form</button></form>');
});

app.post('/', (req, res) => {
    res.send('recebi o formulário');
});



app.listen(3000, () => {
    console.log('Meu first server.');
    console.log('Executando na porta 3000.');
    console.log('http://localhost:3000');
});