const { texto1 } = require("../aula080/textos");

// console.log('texto1.match(/João/i) = ',texto1.match(/João/i));
// console.log('texto1.match(/João/g) = ',texto1.match(/João/g));
// console.log('texto1.match(/João/gi) = ',texto1.match(/João/gi));
// console.log('texto1.match(/João|Maria/gi) = ',texto1.match(/João|Maria/gi));
//nao substitui o 2 joao
// console.log("texto1.replace('João','Felipe') = ",texto1.replace('João','Felipe'));
// a flag i é case insensitive, e nao pega mais de uma ocorrencia pois falta o g
// console.log("texto1.replace(/João/i,'Felipe') = ",texto1.replace(/João/i,'Felipe'));
//agora substitui todos
// console.log("texto1.replace(/João/gi,'Felipe') = ",texto1.replace(/João/gi,'Felipe'));
// console.log("texto1.replace(/João|Maria/gi,'Felipe') = ",texto1.replace(/João|Maria/gi,'Felipe'));
//
// console.log("texto1.replace(/Não canso de ouvir a (Maria|João)/i,'Felipe') = ",texto1.replace(/Não canso de ouvir a (Maria|João)/gi,'Felipe'));
// console.log("texto1.replace(/Não canso de ouvir a (Maria|João)/i,'Felipe') = ",texto1.replace(/Não canso de ouvir a (Maria|João)/gi,'$1'));

console.log("texto1.replace(/João|Maria/gi,function(){}) = ",texto1.replace(/João|Maria/gi,function (input){
return input.toUpperCase();
}));
