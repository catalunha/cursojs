// function somar(x=1, y=2) {
//   const resultado = x + y;
//   return resultado;
// }

// const resultado = somar(2);
// console.log(`resultado = ${resultado}`);

function raiz2a(n){
  return n**(1/2);
}
const raiz2b = function (n) {
  return n ** (1 / 2);
};
const raiz2c = (n) => {
  return n ** (1 / 2);
};
const raiz2d = (n) => n ** (1 / 2);

console.log(`raiz2a(9) = ${raiz2a(9)}`);
console.log(`raiz2b(9) = ${raiz2b(9)}`);
console.log(`raiz2c(9) = ${raiz2c(9)}`);
console.log(`raiz2d(9) = ${raiz2d(9)}`);