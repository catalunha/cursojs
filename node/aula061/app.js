const path = require('path');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

const caminhoArquivo = path.resolve(__dirname, 'teste.txt');
// escrever
// const pessoas = [
//     { nome: 'ana' },
//     { nome: 'bia' }
// ];
// const json = JSON.stringify(pessoas, '', 2);
// // console.log('json = ', json);
// escreve.writeInFile(caminhoArquivo, json);

// ler
async function lendo() {
    const dados = await ler.readInFile(caminhoArquivo);
    console.log('dados = ', dados);
    const obj = JSON.parse(dados);
    console.log('obj = ', obj);
}
lendo();