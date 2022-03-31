// form -> seleciona pela tag
// .form -> seleciona pela class
// #form -> seleciona pelo id
function main() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('foi enviado');
    // };
    const pessoas = [];
    let counter = 1;
    function recebeEventoForm(evento) {
        evento.preventDefault();
        console.log(`form nao enviado. counter ${counter++}`);
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        pessoas.push({ nome: nome.value, sobrenome: sobrenome.value, peso: peso.value, altura: altura.value });
        console.log('pessoas = ', pessoas);
        resultado.innerHTML = `<p>Nome: ${pessoas[pessoas.length-1].nome}</p>`;
        resultado.innerHTML += `<p>Sobrenome: ${pessoas[pessoas.length-1].sobrenome}</p>`;
        resultado.innerHTML += `<p>Peso: ${pessoas[pessoas.length-1].peso}</p>`;
        resultado.innerHTML += `<p>Altura: ${pessoas[pessoas.length-1].altura}</p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}
main();