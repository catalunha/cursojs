const valor = Number(prompt('Qual o numero'));
let numero = document.getElementById('numero');
let texto1 = document.getElementById('texto1');
let texto2 = document.getElementById('texto2');
let texto3 = document.getElementById('texto3');
let texto4 = document.getElementById('texto4');
let texto5 = document.getElementById('texto5');
let texto6 = document.getElementById('texto6');


numero.innerHTML = `${valor}`;
texto1.innerHTML = `Raiz = ${valor**(1/2)}`;
texto2.innerHTML = `É inteiro = ${Number.isInteger(valor)}`;
texto3.innerHTML = `É NaN = ${Number.isNaN(valor)}`;
texto4.innerHTML = `É ceil = ${Math.ceil(valor)}`;
texto5.innerHTML = `É floor = ${Math.floor(valor)}`;
texto6.innerHTML = `É fixed = ${valor.toFixed(2)}`;