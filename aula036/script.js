// const cpf = '836.915,376 34';
// // const cpf = '705.484.450-52';
// // const cpf = '070 987 720 03';
// console.log('cpf = ', cpf);
// const cpfString = cpf.replace(/\D+/g, '');
// console.log('cpfString = ', cpfString);
// const cpfArrayString = Array.from(cpfString);
// console.log('cpfArayString = ', cpfArrayString);
// const cpfArrayNum = cpfArrayString.map((e) => Number(e));
// console.log('cpfArrayNum = ', cpfArrayNum);
// const cpf9Digs = cpfArrayNum.slice(0, 9);
// console.log('cpf9Digs = ', cpf9Digs);
// const cpfCalc9Digs = cpf9Digs.reduce((ac, val, index, array) => {
//     console.log(val, array.length + 1 - index);
//     return ac += val * (array.length + 1 - index)
// }, 0);
// console.log('cpfCalc9Digs = ', cpfCalc9Digs);

// let cpf10Dig = eval(11 - (cpfCalc9Digs % 11));
// if (cpf10Dig > 9) {
//     cpf10Dig = 0
// }
// console.log('cpf10Dig = ', cpf10Dig);
// const cpf10Digs = [...cpf9Digs, cpf10Dig];
// console.log('cpf10Digs = ', cpf10Digs);
// const cpfCalc10Digs = cpf10Digs.reduce((ac, val, index, array) => {
//     console.log(val, array.length + 1 - index);
//     return ac += val * (array.length + 1 - index)
// }, 0);
// console.log('cpfCalc10Digs = ', cpfCalc10Digs);
// let cpf11Dig = eval(11 - (cpfCalc10Digs % 11));
// if (cpf11Dig > 9) {
//     cpf11Dig = 0
// }
// console.log('cpf11Dig = ', cpf11Dig);
// const cpf11Digs = [...cpf10Digs, cpf11Dig];
// console.log('cpf11Digs = ', cpf11Digs);
// const cpfValidadoString = cpf11Digs.join('');
// console.log('cpfValidadoString = ', cpfValidadoString);
// if (cpfString === cpfValidadoString) {
//     console.log(`${cpfValidadoString} é válido`);
// } else {
//     console.log(`${cpfValidadoString} é INVALIDO`);
// }

//====== Como function
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: false,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}
ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito10 = this.criaDigito(cpfParcial)
    // console.log('digito10 = ',digito10);
    const digito11 = this.criaDigito(cpfParcial+digito10);
    // console.log('digito11 = ',digito11);
    const cpfNovo = cpfParcial+digito10+digito11;
    // console.log('cpfNovo = ',cpfNovo);

    return cpfNovo===this.cpfLimpo;
};
ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    const cpfCalc9Digs = cpfArray.reduce((ac, val, index, array) => {
        // console.log(val, array.length + 1 - index);
        return ac += Number(val) * (array.length + 1 - index)
    }, 0);
    let cpf10Dig = eval(11 - (cpfCalc9Digs % 11));
    return cpf10Dig > 9 ? '0' : String(cpf10Dig);
};
ValidaCPF.prototype.isSequencia = function(){
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length)===this.cpfLimpo
};
const cpf = new ValidaCPF('705.484.450-52');
// const cpf = new ValidaCPF('11111111111');
console.log('cpf.valida() = ', cpf.valida());