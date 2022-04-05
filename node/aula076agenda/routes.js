const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/home_controller')
const loginController = require('./src/controllers/login_controller')

//rotas home
route.get('/', homeController.index);

//rotas de login
route.get('/login/index',loginController.index);
route.post('/login/register',loginController.register);


module.exports = route;
