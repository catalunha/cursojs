const {logs} = require('../aula080/textos');
console.log('logs = ',logs);

// console.log('logs.match(/.+[^in]active$/gm) = ',logs.match(/.+[^in]active$/gm));
//positive lookahead
// console.log('logs.match(/.+[^in]active$/gm) = ',logs.match(/.+(?=[^in]active)/gm));
console.log('logs.match(/.+[^in]active$/gm) = ',logs.match(/.+(?=inactive)/gm));