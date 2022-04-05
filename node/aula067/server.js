const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');

// tratar body do post de form 
app.use(express.urlencoded({ extended: true }));

//public
app.use(express.static(path.resolve(__dirname, 'public')));

// views. simular frontend
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// chamar rotas
app.use(routes);

//lista no terminal quando server é iniciado ou atualizado.
app.listen(3000, () => {
    console.log('Meu first server.');
    console.log('Executando na porta 3000.');
    console.log('http://localhost:3000');
});