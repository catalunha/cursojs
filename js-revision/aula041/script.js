class DispElet {
    constructor (nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já esta ligado`);
            return;
        }
        this.ligado = true;
    }
    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já esta desligado`);
            return;
        }
        this.ligado = false;
    }
}

const de1 = new DispElet('cel');
de1.ligar();
de1.ligar();
console.log('de1 = ', de1);

class Celular extends DispElet {
    constructor (nome, cor) {
        super(nome);
        this.cor = cor;
    }
}

const cel1 = new Celular('smartphone','red');
cel1.ligar();
cel1.ligar();
console.log('cel1 = ', cel1);
