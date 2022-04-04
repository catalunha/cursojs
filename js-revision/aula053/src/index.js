//+++ modo 3 - com default
// o default vem como padrao e depois o outro. 
// import e export funciona como desconstrucao
import subtrair2,{nome} from './modulo1';

console.log('mod1.soma(1,2) = ', subtrair2(1, 2));
//---



// //+++ modo 2 - tudo de uma vez
// import * as mod1 from './modulo1';

// console.log('mod1.nome = ', mod1.nome);
// console.log('mod1.snome = ', mod1.snome2);
// console.log('mod1.idade = ', mod1.idade);
// console.log('mod1.soma(1,2) = ', mod1.soma(1, 2));
// const pessoa = new mod1.Pessoa('bia','...bia...'); 
// console.log('pessoa = ',pessoa);
// //---
// // +++ modo 1 - uma var ou function ou class por vez
// import { nome, soma, snome2 as snome2a, idade, Pessoa } from './modulo1';

// console.log('nome = ', nome);
// console.log('snome = ', snome2a);
// console.log('idade = ', idade);
// console.log('soma(1,2) = ', soma(1, 2));
// const pessoa = new Pessoa('bia','...bia...'); 
// console.log('pessoa = ',pessoa);
// //---