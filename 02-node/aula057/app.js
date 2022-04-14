// const path = require('path');//padrao do node nao requer install
const axios = require('axios'); //install via npm install
const mod1 = require('./mod1');
const { snome } = require('./mod1');
const { Pessoa } = require('./mod1');


console.log('mod1 = ', mod1);
console.log('mod1 = ', snome);

console.log('mod1.Pessoa = ', mod1.Pessoa);
const mod1Pessoa = new mod1.Pessoa('bia');
console.log('mod1Pessoa = ', mod1Pessoa);

console.log('Pessoa = ', Pessoa);
const pessoa = new mod1.Pessoa('clara');
console.log('pessoa = ', pessoa);

// console.log('path = ', path);
// console.log('axios = ', axios);

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then((resp) => {
        return console.log('resp = ', resp.data);
    })
    .catch((error) => {
        console.log('error = ', error);
    });