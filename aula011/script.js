const pessoa1 = {
name:'a',
lastName:'a@g',
idade:20,
};
console.log('pessoa1',pessoa1);
let pessoa2 = pessoa1;
pessoa2.name='b';
console.log('pessoa1',pessoa1);
console.log('pessoa2',pessoa2);
let pessoa3 = {...pessoa1};
pessoa3.name='c';
console.log('pessoa1',pessoa1);
console.log('pessoa2',pessoa2);
console.log('pessoa3',pessoa3);
// console.log(`pessoa1.name = ${pessoa1.name}`);
//======
// function criaPessoa(nome, email, idade) {
//     return {
//         name: nome,
//         email: email,
//         idade,
//         saudar() {
//             console.log(`Oi, sou o ${this.name}`);
//         },
//         aumentarIdade(){
//         console.log('fazendo aniversario');
//         this.idade++;
//         }
//     };
// }
// const pessoa2 = criaPessoa('ab', 'a@g', 20);
// console.log(`pessoa2.name = ${pessoa2.name}`);
// console.log(`pessoa2.idade = ${pessoa2.idade}`);
// pessoa2.saudar();
// pessoa2.aumentarIdade();
// console.log(`pessoa2.idade = ${pessoa2.idade}`);