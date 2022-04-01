# functions
```js
funcao1();
function funcao1() {
    console.log('funcao1');
}
// arrow functions não aceita chamar antes, nao são promovidas.
// arrow functions não aceita arguments
const funcao2 = () => {
    console.log('funcao2');
}
funcao2();
const funcao2a = function () {
    console.log('funcao2a');
}
funcao2a();

funcao3(funcao1);
funcao3(funcao2);
function funcao3(funcaoQq) {
    console.log('funcao3...');
    funcaoQq();
}
funcao4('a', 1);
function funcao4() {
    console.log('arguments = ', arguments);
}
function funcao5(a, b = 2, c = 2) {
    console.log('soma = ', a + b + c);
}
funcao5(2);
funcao5(2, 3);
funcao5(2, undefined, 3);

function funcao6({ nome, valor }) {
    console.log('nome = ', nome);
    console.log('valor = ', valor);
}
funcao6({ nome: 'a', valor: 1 });

function funcao7([nome, valor]) {
    console.log('nome = ', nome);
    console.log('valor = ', valor);
}
funcao7(['a', 1]);

function funcao8(operador, numeros) {
    console.log('operador = ', operador);
    console.log('numeros = ', numeros);
}
funcao8('+', [1, 2, 3]);

// Spread operator funciona em arrow functions tb.
function funcao9(operador, ...numeros) {
    console.log('operador = ', operador);
    console.log('numeros = ', numeros);
}
funcao9('+', 1, 2, 3);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const fala = falaFrase('Oi,');
const resto = fala('tudo bem ?');
console.log('resto = ', resto);

function criaPotencia(expoente) {
    return function (base) {
        return base ** expoente;
    }
}
const quadrado = criaPotencia(2);
const cubo = criaPotencia(3);
console.log('quadrado = ', quadrado(2));
console.log('cubo = ', cubo(2));

(function(){
    console.log('funcao auto invocada - IIFE');
})();
```