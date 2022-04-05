const nome = 'ana';
const snome = 'aninha';

const saudar = () => {
    console.log('nome = ', nome);
    console.log('snome = ', snome);
};

class Pessoa {
    constructor (nome) {
        this.nome = nome;
    }
}
// module.exports.nome=nome;
// exports.nome=nome;
// exports.snome=snome;
// exports.Pessoa=Pessoa;

module.exports = {
    nome, snome, Pessoa
};
// console.log('module = ',module);