function criaPessoa(nome, sobrenome = '', altura, peso) {
    return {
        nome,
        sobrenome,
        fala(msg) {
            return `${msg}, eu sou o ${this.nome}`;
        },
        imc() {
            const ind = this.peso / (this.altura * this.altura);
            return ind.toFixed(2);
        },
        get imc2() {
            const ind = this.peso / (this.altura * this.altura);
            return ind.toFixed(2);
        },
        peso,
        altura,
        set nomeCompleto(fname) {
            fname = fname.split(' ');
            this.nome = fname.shift();
            this.sobrenome = fname.join(' ');
        }
    }
}

const p1 = criaPessoa('joao', undefined, 1.87, 100);
console.log('p1 = ', p1);
console.log('p1.fala = ', p1.fala('Oi'));
console.log('p1.imc = ', p1.imc());
console.log('p1.imc2 = ', p1.imc2);
p1.nomeCompleto = 'Ana Maria Souza';
console.log('p1 = ', p1);