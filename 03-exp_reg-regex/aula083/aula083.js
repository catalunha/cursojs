const {texto1,arquivos} =require('../aula080/textos');

// console.log('texto1.match(/João/gi) = ',texto1.match(/João/gi));
// console.log('texto1.match(/João/gi) = ',texto1.match(/Jo+ão/gi));
// console.log('texto1.match(/João/gi) = ',texto1.match(/Jo+ão+/gi));
for (const arq of arquivos) {
  // console.log(arq,' => arq.match(/\.jpg/gi) => ',arq.match(/\.jpg/gi));
  // console.log(arq,' => arq.match(/\.jpeg/gi) => ',arq.match(/\.jpeg/gi));
  // console.log(arq,' => arq.match(/\.(jpg|jpeg)/gi) => ',arq.match(/\.(jpg|jpeg)/gi));
  // console.log(arq,' => arq.match(/\.jpe?g/gi) => ',arq.match(/\.jpe?g/gi));
  // console.log(arq,' => arq.match(/\.jpe*g/gi) => ',arq.match(/\.jpe*g/gi));
  // console.log(arq,' => arq.match(/\.jpe{0,0}g/gi) => ',arq.match(/\.jpe{0,0}g/gi));
  // console.log(arq,' => arq.match(/\.(jp|JP)(e|E)?(g|G)/gi) => ',arq.match(/\.(jp|JP)(e|E)?(g|G)/gi));
  // console.log(arq,' => arq.match(/\.(jp|JP)(e|E)*(g|G)/gi) => ',arq.match(/\.(jp|JP)(e|E)*(g|G)/gi));
  console.log(arq,' => arq.match(/\.(jp|JP)(e|E){0,1}(g|G)/gi) => ',arq.match(/\.(jp|JP)(e|E){0,1}(g|G)/gi));
}