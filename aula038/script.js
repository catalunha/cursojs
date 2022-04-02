const bomdia = {
    bomdia() {
        console.log('Bom dia, eu sou a', this.nome);
    }
}
const pessoaPrototype = {...bomdia};
function criaPessoa(nome, snome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        snome: { value: snome },
    })
}
const p1 = criaPessoa('ana', 'costa');
console.log('p1 = ', p1);
p1.bomdia();


// =======
// function criaPessoa(nome, snome) {
//     const pessoaPrototype = {
//         bomdia() {
//             console.log('Bom dia, eu sou a', this.nome);
//         }

//     };
//     return Object.create(pessoaPrototype, {
//         nome: { value: nome },
//         snome: { value: snome },
//     })
// }
// const p1 = criaPessoa('ana', 'costa');
// console.log('p1 = ', p1);
// p1.bomdia();

