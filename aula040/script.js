//===modo 2
// const _velocidade = Symbol('velocidade');
// class Carro {
//     constructor (nome) {
//         this.nome = nome;
//         this[_velocidade] = 0;
//     }
//     get velocidade(){
//         return this[_velocidade];
//     }
//     set velocidade(valor) {
//         if (typeof valor!== 'number') return;
//         if (valor >= 100) return;
//         this[_velocidade] = valor;
//     }
//     acelerar() {
//         if (this[_velocidade] >= 100) return;
//         this[_velocidade]++;
//     }
//     frear() {
//         if (this[_velocidade] <= 0) return;
//         this[_velocidade]--;
//     }
// }

// const c1 = new Carro('fusca');
// console.log('c1 = ',c1);
// c1.acelerar();
// c1.acelerar();
// c1.acelerar();
// console.log('c1.velocidade = ',c1.velocidade);

// class modo 1
// class Carro {
//     constructor (nome) {
//         this.nome = nome;
//         this.velocidade = 0;
//     }
//     acelerar() {
//         if (this.velocidade >= 100) return;
//         this.velocidade++;
//     }
//     frear() {
//         if (this.velocidade <= 0) return;
//         this.velocidade--;
//     }
// }

// const c1 = new Carro('fusca');
// c1.acelerar();
// c1.acelerar();
// c1.acelerar();
// console.log('c1.velocidade = ',c1.velocidade);

// ===criando class
// class Pessoa {
//     constructor (nome, snome) {
//         this.nome = nome;
//         this.snome = snome;
//     }
//     bomDia() {
//         console.log(`Bom dia, sou o ${this.nome}`);
//     }
// }
// const p1 = new Pessoa('ana', 'costa');
// console.log('p1 = ', p1);
// p1.bomDia();