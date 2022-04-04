function randNum(min = 1, max = 5) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

//modo 3 - com promise
function esperaAi(msg, tempo, callback) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(`Reject ${msg}`);
            return;
        }
        setTimeout(() => {
            console.log('Execute: ',msg, tempo);
            resolve(`Resolve: ${msg}`);
        }, tempo);
    });
}

esperaAi('promise1', randNum(1, 3))
    .then((resposta) => {
        console.log(resposta);
        return esperaAi(123, randNum(1, 3));
        // return esperaAi('promise2', randNum(1, 3));
    })
    .then((resposta) => {
        console.log(resposta);
        return esperaAi('promise3', randNum(1, 3));
    })
    .then((resposta) => {
        console.log(resposta);
    })
    .catch((resposta) => {
        console.log(resposta);
    });

//modo 2 - com callback hell
// function esperaAi(msg, tempo,callback) {
//     setTimeout(() => {
//         console.log(msg,tempo);
//         if(callback) callback()
//     }, tempo);
// }

// esperaAi('oi1', randNum(),function () {
//     esperaAi('oi2', randNum(),function () {
//         esperaAi('oi3', randNum());
//     });
// });


// modo 1 - aletorio
// function esperaAi(msg, tempo) {
//     setTimeout(() => {
//         console.log(msg,tempo);
//     }, tempo);
// }

// esperaAi('oi1', randNum());
// esperaAi('oi2', randNum());
// esperaAi('oi3', randNum());
