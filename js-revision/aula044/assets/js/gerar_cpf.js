class GerarCPF {
    constructor () {
    }
    gerar() {
        const cpfParcial = String(Math.floor(Math.random() * 1000000000));
        const digito10 = this.criaDigito(cpfParcial)
        const digito11 = this.criaDigito(cpfParcial + digito10);
        const cpfNovo = cpfParcial + digito10 + digito11;
        return cpfNovo;
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
