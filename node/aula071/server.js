require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');

// const connectionString = 'mongodb+srv://adminmongodbcloud:adminmongodbcloud@cluster0.ppgh6.mongodb.net/meudatabase01?retryWrites=true&w=majority';
console.log('connecting with MongoDB: ...');
mongoose.connect(process.env.urlMongoDB)
.then(()=>{
    app.emit('isConnectedWithMongoDB');
}).catch((error)=>{
console.log('connecting with MongoDB: Error',error);
});

const routes = require('./routes')
const path = require('path');
// const { __express } = require('ejs');
const {meuMiddleware1} = require('./src/middlewares/middleware');


// tratar body do post de form 
app.use(express.urlencoded({ extended: true }));

//public
app.use(express.static(path.resolve(__dirname, 'public')));

// views. simular frontend
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//ler meus middlewares
app.use(meuMiddleware1);

// chamar rotas
app.use(routes);

app.on('isConnectedWithMongoDB',()=>{
//lista no terminal quando server é iniciado ou atualizado.
app.listen(3000, () => {
    console.log('connected with MongoDB. Ok.');
    console.log('Server in ', __dirname);
    console.log('Executando na porta 3000.');
    console.log('http://localhost:3000');
});
});
