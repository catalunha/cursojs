//filter -> retornar array com menos elementos que atendem ao filtro, sendo o returno do filtro em true ou false.
//map -> retornar um array modificando os elementos para novo valor
//reduce -> retorna um valor após processar o array

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = num.reduce((acumulador,valor)=>{
    return acumulador +=valor;
});
console.log('total = ',total);

//======
// const pessoas = [
//     {
//         nome: 'ana', idade: 10
//     },
//     {
//         nome: 'bia', idade: 20
//     },
// ]
// // const maps = pessoas.map((obj)=>{return obj.nome});
// const maps = pessoas.map(obj => obj.nome);
// console.log('maps = ', maps);
//======
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // const newMap = num.map((valor)=>{return valor*2;})
// const newMap = num.map((valor,indice)=>{return valor**indice;})
// console.log('newMap = ',newMap);
//==========
// const pessoas = [
//     {
//         nome: 'ana', idade: 10
//     },
//     {
//         nome: 'bia', idade: 20
//     },
// ]

// const filtered = pessoas.filter((obj)=>{
//     return obj.idade>=20
// });
// console.log('filtered = ',filtered);
//==========
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filtered = num.filter((valor) => valor % 2 === 0);
// console.log('filtered = ', filtered);

//==============
// const num = [1,2,3,4,5,6,7,8,9,10];
// function callbackFilter(valor){
//     return valor%2===0;
// }
// const filtered = num.filter(callbackFilter);
// console.log('filtered = ',filtered);

//================
// const num = [1,2,3,4,5,6,7,8,9,10];
// function callbackFilter(valor,indice,array){
//     // console.log('valor = ',valor);
//     // console.log('indice = ',indice);
//     // console.log('array = ',array);
//     if(valor%2===0){
//         return true;
//     }else{
//         return false;
//     }
// }
// const filtered = num.filter(callbackFilter);
// console.log('filtered = ',filtered);


//========
// const letras = ['a','b','c'];
// const letras2 = ['A','B','C'];
// const todas = [...letras,...letras2,...[1,2]];
// console.log('todas = ',todas);
//=====
// const letras = ['a','b','c'];
// console.log('letras = ',letras);
// delete letras[1];
// letras[1]=undefined;
// console.log('letras = ',letras);
// console.log('letras = ',letras[1]);
//=======
//              -3  -2  -1
//               0   1   2
// const letras = ['a','b','c'];
// Array.splice(indiceAtuar,indiceDeletar,...SpreadAdicionar)
//splice como pop
// letras.pop()// remove o ultimo e retorna ele.
// const removido= letras.splice(-1,1) // remove o indicado e retorna array
// console.log('letras = ',letras);
// console.log('removido = ',removido);

//splice como add em qq posição
// const adicionado= letras.splice(1,0,'A') // remove o indicado e retorna array
// console.log('letras = ',letras);
// console.log('adicionado = ',adicionado);

//splice como unshift
// const adicionado= letras.splice(0,0,'A') // remove o indicado e retorna array
// console.log('letras = ',letras);
// console.log('adicionado = ',adicionado);

//splice como push
// const adicionado= letras.splice(letras.length,0,'A') // remove o indicado e retorna array
// console.log('letras = ',letras);
// console.log('adicionado = ',adicionado);
