const express = require('express');
const route = express.Router();

const homeController = require('./controllers/home_controller')
const formController = require('./controllers/form_controller')
const contatoController = require('./controllers/contato_controller');
const paramsquerysController = require('./controllers/params_querys_controller');

route.get('/',homeController.page);
//rotas de Form
route.get('/form1', formController.page);
route.post('/form1/data', formController.data)

//rotas de contato
route.get('/contato', contatoController.page);

//rotas de requisicao
route.get('/paramsquerys/:id1?/:id2?', paramsquerysController.page);

module.exports = route;