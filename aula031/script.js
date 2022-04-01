const letras = ['a','b','c'];
const letras2 = ['A','B','C'];
const todas = [...letras,...letras2,...[1,2]];
console.log('todas = ',todas);



// const letras = ['a','b','c'];
// console.log('letras = ',letras);
// delete letras[1];
// letras[1]=undefined;
// console.log('letras = ',letras);
// console.log('letras = ',letras[1]);

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
