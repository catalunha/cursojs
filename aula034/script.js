function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * percentual / 100);
}
Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * percentual / 100);
}

const p1 = new Produto('caneca', 10);
// p1.aumento(100);
// console.log('p1.aumento(100) = ',p1.preco);
p1.desconto(100);
console.log('p1.desconto(100) = ', p1.preco);

// construindo um novo object literal
const p2 = {
    nome: 'copo',
    preco: 15,
}
Object.setPrototypeOf(p2,Produto.prototype);
p2.aumento(100);
console.log('p2.aumento(100) = ',p2.preco);



//==== TEORIA IMPORTANTE
// // todo new Object -> Object.prototype
// const objA = {
//     chaveA: 'A',
//     //__proto__: Object.prototype
// }
// const objB = {
//     chaveB: 'B',
//     //__proto__: ObjA
// }
// const objC = new Object();
// objC.chaveC='C';
// Object.setPrototypeOf(objB,objA);// objB extends objA
// Object.setPrototypeOf(objC,objB);// objC extends objB
// console.log('objB.chaveB = ',objB.chaveB);
// console.log('objB.chaveA = ',objB.chaveA);
// console.log('objC.chaveA = ',objC.chaveA);



//========
// function Pessoa(nome, snome) {
//     this.nome = nome;
//     this.snome = snome;
//     // this.nomeCompleto = () => `${this.nome} ${this.snome}`;
// }
// Pessoa.prototype.nomeCompleto = function () {
//     return `${this.nome} ${this.snome}`;
// }
// const p1 = new Pessoa('joao', 'costa');
// console.log(p1);
// console.log(p1.nomeCompleto());