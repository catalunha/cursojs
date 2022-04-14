axios('pessoas.json')
    .then((resposta) => {
        // console.log(json);
        carregaJson(resposta.data);
    })
    .catch((error) => {
        console.log('error = ', error);
    });

// fetch('pessoas.json')
//     .then((resposta) => {
//         return resposta.json();
//     })
//     .then((json) => {
//         // console.log(json);
//         carregaJson(json);
//     })
//     .catch((error) => {
//         console.log('error = ', error);
//     });

function carregaJson(json) {
    const table = document.createElement('table');
    for (let pessoa of json) {
        const tr = document.createElement('tr');
        // console.log('pessoa = ',pessoa);
        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = pessoa.email;
        tr.appendChild(td);
        table.appendChild(tr);
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}