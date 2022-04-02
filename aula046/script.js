function randNum(min = 1, max = 5) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

//modo 3 - com promise
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(`Reject ${msg}`);
            return;
        }
        setTimeout(() => {
            console.log('Execute: ', msg, tempo);
            resolve(`Resolve: ${msg}`);
        }, tempo);
    });
}

//Promise.resolve
//Promise.reject
function baixarPagina() {
    const emCache = false;
    if (emCache) {
        return Promise.reject('Erro na Pagina em cache');
        // return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixando pagina', 3000,)
    }
}

baixarPagina()
    .then((resposta) => {
        console.log('resposta:', resposta);
    })
    .catch((erro) => {
        console.log('erro:', erro);
    });

//Promise.race
// const promises = [
//     'valor1',
//     esperaAi('promise1', 3000),
//     // esperaAi(123, 500),
//     esperaAi('promise2', 500),
//     esperaAi('promise3', 1000),
//     'valorN',
// ];
// Promise.race(promises)
//     .then((resposta) => {
//         console.log('Resolvidas:', resposta);
//     }).catch((error) => {
//         console.log('Erro:', error);
//     });

//Promise.all
// const promises = [
//     'valor1',
//     esperaAi('promise1', 3000),
//     // esperaAi(123, 500),
//     esperaAi('promise2', 500),
//     esperaAi('promise3', 1000),
//     'valorN',
// ];
// Promise.all(promises)
//     .then((resposta) => {
//         console.log('Resolvidas:', resposta);
//     }).catch((error) => {
//         console.log('Erro:', error);
//     });

