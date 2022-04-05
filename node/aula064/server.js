const express = require('express');

const app = express();
// tratar body do post de form 
app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

// /paramsquerys/123
// /paramsquerys/123/456
// /paramsquerys/123/456/?a=b
// /paramsquerys/123/456/?a=a1&b=b1
app.get('/paramsquerys/:id1?/:id2?', (req, res) => {
    console.log('req.param = ', req.params);
    console.log('req.query = ', req.query);
    res.send({ ...req.params, ...req.query });
});

app.post('/', (req, res) => {
    console.log('req.body = ',req.body);
    res.send(req.body);
});



app.get('/', (req, res) => {
    res.send('Olá...s');
});

app.get('/contato', (req, res) => {
    res.send('Nossos contatos');
});
app.get('/form', (req, res) => {
    res.send('<form action="/" method="POST"> Nome: <input type="text" name="nome"> Apelido: <input type="text" name="apelido"> <button>Enviar form</button></form>');
});

// app.post('/', (req, res) => {
//     res.send('recebi o formulário');
// });



app.listen(3000, () => {
    console.log('Meu first server.');
    console.log('Executando na porta 3000.');
    console.log('http://localhost:3000');
});