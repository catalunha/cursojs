require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');

// const connectionString = 'mongodb+srv://adminmongodbcloud:adminmongodbcloud@cluster0.ppgh6.mongodb.net/meudatabase01?retryWrites=true&w=majority';
console.log('connecting with MongoDB: ...');
mongoose.connect(process.env.urlMongoDB)
    .then(() => {
        app.emit('isConnectedWithMongoDB');
    }).catch((error) => {
        console.log('connecting with MongoDB: Error', error);
    });

//salvando seção na memoria
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

//mapeando as rotas
const routes = require('./routes')
const path = require('path');
// const { __express } = require('ejs');
const { meuMiddleware1 } = require('./src/middlewares/middleware');


// tratar body do post de form 
app.use(express.urlencoded({ extended: true }));

// pastas publicas
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'textosecreto',
    store: new MongoStore({ mongoUrl: process.env.urlMongoDB }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    }
});
app.use(sessionOptions);
app.use(flash());

// views. simular frontend
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//ler meus middlewares
app.use(meuMiddleware1);

// chamar rotas
app.use(routes);

app.on('isConnectedWithMongoDB', () => {
    //lista no terminal quando server é iniciado ou atualizado.
    app.listen(3000, () => {
        console.log('connected with MongoDB. Ok.');
        console.log('Server in ', __dirname);
        console.log('Executando na porta 3000.');
        console.log('http://localhost:3000');
    });
});
