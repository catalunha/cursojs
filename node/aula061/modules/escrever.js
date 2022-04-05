const fs = require('fs').promises;

function writeInFile(caminhoArquivo, dados) {
    fs.writeFile(caminhoArquivo,
        dados,
        {
            flag: 'w',
            encoding: 'utf8',//padrao
        }
    );
};

module.exports = { writeInFile };