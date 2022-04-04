const prod1 = { nome: 'caneca', preco: 1.8, };
// console.log(Object.getOwnPropertyDescriptor(prod1,'nome'));
for(let [chave,valor] of Object.entries(prod1)){
console.log('chave = ',chave);
console.log('valor = ',valor);
}
//=======
// const prod1 = { nome: 'caneca', preco: 1.8, };
// const prod2 = prod1;
// const prod3 = {...prod1,tipo:'vidro'};
// console.log('prod1 = ',prod1);
// console.log('prod2 = ',prod2);
// prod2.preco=2.5;
// console.log('prod1 = ',prod1);
// console.log('prod2 = ',prod2);
// prod3.preco=3.5;
// console.log('prod1 = ',prod1);
// console.log('prod3 = ',prod3);
