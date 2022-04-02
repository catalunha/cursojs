function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log('Saldo insuficiente.');
        return;
    }
    this.saldo -= valor;
};
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
};
Conta.prototype.verSaldo = function () {
    return this.saldo.toFixed(2);
};
Conta.prototype.toString = function () {
    console.log(`Ag.: ${this.agencia} CC: ${this.conta} Saldo: ${this.verSaldo()}`);
};
// const conta1 = new Conta('ag1', 'cc1', 100);
// conta1.toString();
// conta1.depositar(5);
// conta1.toString();
// conta1.sacar(200);
// conta1.toString();

// ContaCorrente  extends Conta
// tem valor de limite para saque abaixo do saldo.
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log('Sacando do limite.');
    }
    if (valor > (this.saldo + this.limite)) {
        console.log('Saldo + Limite: Insuficiente.');
        return;
    }
    this.saldo -= valor;
};
ContaCorrente.prototype.toString = function () {
    console.log(`Ag.: ${this.agencia} CC: ${this.conta} Saldo: ${this.verSaldo()} Limite: ${this.limite}`);
};
const cc1 = new ContaCorrente('ag1','cc1',100,50);
cc1.toString();
cc1.sacar(125);
cc1.toString();
cc1.sacar(1);
cc1.toString();