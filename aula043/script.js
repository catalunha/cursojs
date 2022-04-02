class ValidarCPF{
constructor(cpf){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: false,
        get: function () {
            return cpf.replace(/\D+/g, '');
        }
    });

}
validar() {
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
}
criaDigito (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    const cpfCalc9Digs = cpfArray.reduce((ac, val, index, array) => {
        // console.log(val, array.length + 1 - index);
        return ac += Number(val) * (array.length + 1 - index)
    }, 0);
    let cpf10Dig = eval(11 - (cpfCalc9Digs % 11));
    return cpf10Dig > 9 ? '0' : String(cpf10Dig);
};
isSequencia(){
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length)===this.cpfLimpo
}
}

const cpf1 = new ValidarCPF('705.484.450-52');
console.log('cpf.validar() = ', cpf1.validar());
//====== Como function
// function ValidaCPF(cpfEnviado) {
//     Object.defineProperty(this, 'cpfLimpo', {
//         enumerable: false,
//         get: function () {
//             return cpfEnviado.replace(/\D+/g, '');
//         }
//     });
// }
// ValidaCPF.prototype.valida = function () {
//     if (typeof this.cpfLimpo === 'undefined') return false;
//     if (this.cpfLimpo.length !== 11) return false;
//     if (this.isSequencia()) return false;
//     const cpfParcial = this.cpfLimpo.slice(0, -2);
//     const digito10 = this.criaDigito(cpfParcial)
//     // console.log('digito10 = ',digito10);
//     const digito11 = this.criaDigito(cpfParcial+digito10);
//     // console.log('digito11 = ',digito11);
//     const cpfNovo = cpfParcial+digito10+digito11;
//     // console.log('cpfNovo = ',cpfNovo);

//     return cpfNovo===this.cpfLimpo;
// };
// ValidaCPF.prototype.criaDigito = function (cpfParcial) {
//     const cpfArray = Array.from(cpfParcial);
//     const cpfCalc9Digs = cpfArray.reduce((ac, val, index, array) => {
//         // console.log(val, array.length + 1 - index);
//         return ac += Number(val) * (array.length + 1 - index)
//     }, 0);
//     let cpf10Dig = eval(11 - (cpfCalc9Digs % 11));
//     return cpf10Dig > 9 ? '0' : String(cpf10Dig);
// };
// ValidaCPF.prototype.isSequencia = function(){
//     return this.cpfLimpo[0].repeat(this.cpfLimpo.length)===this.cpfLimpo
// };
// const cpf = new ValidaCPF('705.484.450-52');
// // const cpf = new ValidaCPF('11111111111');
// console.log('cpf.valida() = ', cpf.valida());