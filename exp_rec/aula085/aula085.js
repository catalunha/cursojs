const {alfabeto} = require('../aula080/textos');

console.log('alfabeto = ',alfabeto);
// console.log('alfabeto.match(/[abc123]+/g) = ',alfabeto.match(/[abc123]+/g));
// console.log('alfabeto.match(/[^abc123]+/g) = ',alfabeto.match(/[^abc123]+/g));
// console.log('alfabeto.match(/[0-9]+/g) = ',alfabeto.match(/[0-9]+/g));
// console.log('alfabeto.match(/[a-k]+/g) = ',alfabeto.match(/[a-k]+/g));
// console.log('alfabeto.match(/[a-zA-Z0-9]+/g) = ',alfabeto.match(/[a-zA-Z0-9]+/g));
// console.log('alfabeto.match(/[^a-zA-Z0-9]+/g) = ',alfabeto.match(/[^a-zA-Z0-9]+/g));
// console.log('alfabeto.match(/[\u00A0-\u00BA]+/g) = ',alfabeto.match(/[\u00A0-\u00BA]+/g));
// console.log('alfabeto.match(/[\u00A0-\u00BA]+/g) = ',alfabeto.match(/[\u00A0-\u00BA]+/g));
// console.log('alfabeto.match(/[\s]+/g) = ',alfabeto.match(/[\s]+/g));
console.log('alfabeto.replace(/[\s]+/g,"_") = ',alfabeto.replace(/[\s]+/g,'_'));