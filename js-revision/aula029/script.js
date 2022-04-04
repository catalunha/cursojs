// Função construtora -> objetos
// Função fabrica -> objetos
function pessoa1(nome, sobrenome) {
    return {
        nome,
        sobrenome
    };
}

const p1 = pessoa1('joao', 'josé');
console.log('p1 = ', p1);


// Construtora -> Pessoa(new)

function Pessoa2(nome, sobrenome) {
    // privados
    const ID='123';
    //publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.saudar = ()=> {
        console.log(`Oi, sou o ${this.nome}`);
    };
}
const p2 = new Pessoa2('joao', 'josé');
console.log('p2 = ', p2);
p2.saudar();
console.log('p2.ID = ',p2.ID);
console.log('p2.nome = ',p2.nome);

// ====

class Pessoa3 {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
const p3 = new Pessoa3('joao', 'josé');
console.log('p3 = ', p3);

// =====