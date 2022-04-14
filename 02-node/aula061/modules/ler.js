const fs = require('fs').promises;

async function readInFile(caminhoArquivo) {
    const dados = await fs.readFile(caminhoArquivo, 'utf8');
    return dados;
};

module.exports = { readInFile };