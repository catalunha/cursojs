// produto
// camisa, caneca, lapis
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function (percentual) {
    this.preco *= (1 - percentual / 100);
}
Produto.prototype.aumento = function (percentual) {
    this.preco *= (1 + percentual / 100);
}
const p1 = new Produto('camisa', 10)
p1.aumento(100);
console.log('p1.preco = ', p1.preco);

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function (percentual) {
    this.preco *= (1 + percentual / 100)+percentual;
}
const p2 = new Produto('caneta',10);
const c1 = new Camiseta('hering',10);
console.log('p2 = ',p2);
console.log('c1 = ',c1);
c1.aumento(10);
console.log('c1 = ',c1);


function Caneca(nome,preco,material){
    Produto.call(this,nome,preco);
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
const cnc1 = new Caneca('cha',30);
console.log('cnc1 = ',cnc1);