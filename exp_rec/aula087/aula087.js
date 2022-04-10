const {cpfs} =require('../aula080/textos');

console.log(cpfs.match(/[0-9]+\.[0-9]+\.[0-9]+-[0-9]+/g));
const cpf1 = '147.258.369-36';
console.log('cpf1.match(/[0-9]+\.[0-9]+\.[0-9]+-[0-9]+/g) = ',cpf1.match(/^[0-9]+\.[0-9]+\.[0-9]+-[0-9]+$/g));
const cpf2 = 'a147.2 58.369-36';
console.log('cpf2.match(/[0-9]+\.[0-9]+\.[0-9]+-[0-9]+/g) = ',cpf2.match(/^[0-9]+\.[0-9]+\.[0-9]+-[0-9]+$/g));
console.log('cpf2.match(/\d+/g) = ',cpf2.match(/\d/g));
console.log('cpf2.match(/[0-9]+\.[0-9]+\.[0-9]+-[0-9]+/g) = ',cpf2.match(/^[0-9]+\.[0-9]+\.[0-9]+-[0-9]+$/g));