// let a = 'A';
// let b = 'B';
// let c = 'C';
// // [a, b, c] = [1, 2, 3];
// // console.log(a, b, c);
// const numeros = [2, 4, 6];
// [a] = [...numeros];
// console.log(a, b, c); 

const pessoa={
    nome:'luiz',
    sobrenome:'miranda',
    idade:30,
    endereco:{
        rua:'Av Brasil',
        numero:320
    }
};
console.log(`pessoa.nome = ${pessoa.nome}`);
console.log(`pessoa.endereco.rua = ${pessoa.endereco.rua}`);
// const {sobrenome:sobren,nome:nom}= pessoa;
// console.log(`sobren = ${sobren}`);
// console.log(`nom = ${nom}`);

// const {sobrenome,nome}= pessoa;
// console.log(`sobrenome = ${sobrenome}`);
// console.log(`nome = ${nome}`);

// const {a,b}= pessoa; //erro
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);

const {nome,endereco,endereco:{rua,via:viela=12}}= pessoa; //erro
console.log(`nome = ${nome}`);
console.log('endereco = ',endereco);
console.log(`rua = ${rua}`);
console.log(`viela = ${viela}`);

