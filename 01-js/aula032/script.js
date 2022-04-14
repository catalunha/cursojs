
// // Factory functions
function criaPessoa(nome) {
    return {
        
        get nome() {
            // return this.nome.toUpperCase();
            return nome;
        },
        set nome(valor) {
            nome = valor.toLowerCase();
        }
    };
}
const p1 = criaPessoa('ana');
p1.nome='Ana';
console.log(p1.nome);


// // // Factory functions
// function criaPessoa(nome) {
//     return {
//         nome,
//         get nomeUp() {
//             // return this.nome.toUpperCase();
//             return this.nome;
//         },
//         set nomeUp(valor) {
//             this.nome = valor.toLowerCase();
//         }
//     };
// }
// const p1 = criaPessoa('ana');
// p1.nomeUp='Ana';
// console.log(p1.nomeUp);

//Constructor function
// function Pessoa(nome, senha) {
//     this.nome = nome;
//     // this.senha = senha;
//     let senhaPrivada='..';
//     Object.defineProperty(this, 'senha', {
//         enumerable: true, // mostra ou nao o atributo
//         // value: senha, // set valor do atributo
//         // writable: false, // permite ou nao reescrever o valor
//         configurable: true, // pode reconfigurar o atributo
//         get: function () {
//             return senhaPrivada;
//         },
//         set: function (valor) {
//             senhaPrivada=valor;
//         },
//     });
//     Object.defineProperties(this, {
//         password: {
//             enumerable: true, // mostra ou nao o atributo
//             value: senha, // set valor do atributo
//             writable: false, // permite ou nao reescrever o valor
//             configurable: true // pode reconfigurar o atributo
//         },
//     });
// }
// const p1 = new Pessoa('ana', 'abc');
// console.log(p1);
// console.log(p1.senha);
// p1.senha='cba';
// console.log(p1.senha);
// console.log(Object.keys(p1));

//=======

// //Constructor function
// function Pessoa(nome, senha) {
//     this.nome = nome;
//     // this.senha = senha;
//     Object.defineProperty(this, 'senha', {
//         enumerable: true, // mostra ou nao o atributo
//         value: senha, // set valor do atributo
//         writable: false, // permite ou nao reescrever o valor
//         configurable: true // pode reconfigurar o atributo
//     });
//     Object.defineProperties(this, {
//         password: {
//             enumerable: true, // mostra ou nao o atributo
//             value: senha, // set valor do atributo
//             writable: false, // permite ou nao reescrever o valor
//             configurable: true // pode reconfigurar o atributo
//         },
//     });
// }
// const p1 = new Pessoa('ana', 'abc');
// console.log(p1);
// console.log(Object.keys(p1));


// // Factory functions
// function criaPessoa(nome) {
//     return {
//         nome
//     };
// }
// const p1 = criaPessoa('ana');

// //Constructor function
// function Pessoa(nome){
// this.nome = nome;
// }
// const p2 = new Pessoa('ana');

// //classes

// //======
// function criaPessoa(nome) {
//     return {
//         nome
//     };
//     Object.freeze(this)
// }
// const p3 = criaPessoa('ana');


//======

// const pessoa = {
//     nome: 'joao',
//     snome: 'costa',
//     fullName: () => {
//         console.log(`${this.nome} ${this.snome}`);
//     },
// }
// const pessoa = new Object();
// pessoa.nome = 'maria'
// pessoa.snome = 'costa'
// pessoa.fullName = function () {
//     console.log(`${this.nome} ${this.snome}`);
// };
// console.log('pessoa = ', pessoa);
// console.log('pessoa.nome = ', pessoa['nome']);
// console.log('pessoa.nome = ', pessoa.nome);
// pessoa.fullName();
// const pJson = JSON.stringify(pessoa);
// console.log('pJson = ', pJson);
// delete pessoa.snome;
// console.log('pessoa = ', pessoa);