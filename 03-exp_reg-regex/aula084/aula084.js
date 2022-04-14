const {html} = require('../aula080/textos');
// greedy pega o inicio e fim 
console.log('html.match(/<.+>.+<\/.+>/g) = ',html.match(/<.+>.+<\/.+>/g));
// no-greedy 
console.log('html.match(/<.+?>.+?<\/.+?>/g) = ',html.match(/<.+?>.+?<\/.+?>/g));