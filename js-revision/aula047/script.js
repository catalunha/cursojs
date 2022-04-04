function randNum(min = 1, max = 5) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


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

// com async
async function executeSync() {
    try {

        const p1 = await esperaAi('promise1', randNum());
        console.log('p1 = ', p1);
        const p2 = await esperaAi(123, randNum());
        // const p2 = await esperaAi('promise2', randNum());
        console.log('p2 = ', p2);
        const p3 = await esperaAi('promise3', randNum());
        console.log('p3 = ', p3);
        console.log('Fim executeSync');
    } catch (error) {
        console.log('error = ', error);
    }
}
executeSync();
// com promise
// esperaAi('promise1', randNum())
//     .then((resposta) => {
//         console.log('resposta: ', resposta);
//         return esperaAi('promise2', randNum());
//     })
//     .then((resposta) => {
//         console.log('resposta: ', resposta);
//     })
//     .catch((erro) => {
//         console.log('erro: ', erro);
//     });