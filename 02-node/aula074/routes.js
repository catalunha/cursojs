const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/home_controller')
const formController = require('./src/controllers/form_controller')
const contatoController = require('./src/controllers/contato_controller');
const paramsquerysController = require('./src/controllers/params_querys_controller');

//rotas home
route.get('/', homeController.page);

//rotas de Form
route.get('/form1', formController.page);
route.post('/form1/data', formController.data)

//rotas de contato
route.get('/contato', contatoController.page);

//rotas de requisicao
route.get('/paramsquerys/:id1?/:id2?', paramsquerysController.page);

module.exports = route;

//modo 1 de usar o middleware
// const express = require('express');
// const route = express.Router();

// const homeController = require('./src/controllers/home_controller')
// const formController = require('./src/controllers/form_controller')
// const contatoController = require('./src/controllers/contato_controller');
// const paramsquerysController = require('./src/controllers/params_querys_controller');

// function meuMiddleware(req, res, next) {
//     req.session = { nome: 'ana', apelido: 'aninha' };
//     console.log();
//     console.log('Passei no meuMiddleware');
//     console.log();
//     next();
// }
// function meuMiddlewareAposRes(req, res) {
//     console.log('req.session last middleware = ',req.session);

//     console.log();
//     console.log('Fui no meuMiddlewareAposRes');
//     console.log();
// }
// //rotas home
// route.get('/', meuMiddleware, homeController.page, meuMiddlewareAposRes);

// //rotas de Form
// route.get('/form1', formController.page);
// route.post('/form1/data', formController.data)

// //rotas de contato
// route.get('/contato', contatoController.page);

// //rotas de requisicao
// route.get('/paramsquerys/:id1?/:id2?', paramsquerysController.page);

// module.exports = route;