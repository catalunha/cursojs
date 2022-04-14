//for classico -> array e strings
//for in -> objects, array, strings
//for of -> arrays, strings


const word = 'abc';
const letras = ['a', 'b', 'c'];
const livro = { cap1: 'abc', cap2: 'def',cap3:{secao1:'secao1',secao2:'secao2'} };

// console.log('livro["cap1"] = ',livro['cap1']);

// for (let index = 0; index < letras.length; index++) {
//     const element = letras[index];
//     console.log(`element = ${element}`);
// }

// letras.forEach(element => {
//     console.log(`element = ${element}`);
// });
letras.forEach(function(element,indice,array) {
    console.log(`element = ${element}`);
    console.log(`indice = ${indice}`);
    console.log(`array = ${array}`);
});

// for (const index in letras) {
//     console.log(`element = ${letras[index]}`);
// }

// for (const chave in livro) {
//     console.log(`element = ${livro[chave]}`);
// }

// for (const chave in livro) {
//     if (Object.hasOwnProperty.call(livro, chave)) {
//         const element = livro[chave];
//     console.log(`element = ${element}`);
//     }
// }

//erro
// for (const letra of livro) {
//     console.log(`element = ${letra}`);
// }

// for (const letra of letras) {
//     console.log(`element = ${letra}`);
// }


// for (const letra of word) {
//     console.log(`element = ${letra}`);
// }
// for (const index in word) {
//     console.log(`element = ${word[index]}`);
// }
