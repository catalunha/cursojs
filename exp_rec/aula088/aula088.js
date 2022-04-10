const {html2} = require('../aula080/textos');

// console.log('html2 = ',html2);
// console.log('html2.match(/<.+>.+<\/.+>/g) = ',html2.match(/<.+?>.+?<\/.+?>/g));
// console.log('html2.match(/<.+>.+<\/.+>/g) = ',html2.match(/<\w+>.+?<\/.+?>/g));
// console.log('html2.match(/<.+>.+<\/.+>/g) = ',html2.match(/<(\w+)>.+?<\/\1>/g));
// console.log('html2.match(/<.+>.+<\/.+>/g) = ',html2.match(/<(\w+).*>.+?<\/\1>/g));
// console.log('html2.match(/<.+>.+<\/.+>/g) = ',html2.match(/<(\w+)[\s\S]*?>.+?<\/\1>/g));
// console.log('html2.match(/<.+>.+<\/.+>/g) = ',html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g));
// console.log('html2.match(/<.+>.+<\/.+>/g) = ',html2.replace(/<((\w+)[\s\S]*?>)([\s\S]*?)(<\/\1>)/g,'$1$3$4'));
console.log('html2.match(/<.+>.+<\/.+>/g) = ',html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g,'$1 outrotexto $4'));