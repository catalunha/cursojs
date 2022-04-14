class GerarCPF {
    constructor () {
    }
    gerar() {
        // const cpfParcial = String(Math.floor(Math.random() * 1000000000));
        const cpfParcial = this.randNum();

        const digito10 = this.criaDigito(cpfParcial)
        const digito11 = this.criaDigito(cpfParcial + digito10);
        const cpfNovo = cpfParcial + digito10 + digito11;
        return cpfNovo;
    }
    formatar(cpf) {
        let cpfNumbers;
        console.log('cpf = ',cpf);
        if (cpf !== 'undefined') {
            cpfNumbers=String(cpf).replace(/\D+/g, '');
        } else {
            cpfNumbers = this.gerar();
        }
        return (
            cpfNumbers.slice(0, 3) + '.' +
            cpfNumbers.slice(3, 6) + '.' +
            cpfNumbers.slice(6, 9) + '-' +
            cpfNumbers.slice(9, 11)
        );
    }
    randNum() {
        const min = 100000000;
        const max = 999999999;
        return String(Math.floor(Math.random() * (max - min) + min));
    }
    criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        const cpfCalc9Digs = cpfArray.reduce((ac, val, index, array) => {
            return ac += Number(val) * (array.length + 1 - index)
        }, 0);
        let cpf10Dig = eval(11 - (cpfCalc9Digs % 11));
        return cpf10Dig > 9 ? '0' : String(cpf10Dig);
    };
}

// const cpf1 = new GerarCPF();
// console.log('cpf.gerar() = ', cpf1.gerar());
console.log('em gerarCPF');

export { GerarCPF };