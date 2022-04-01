// try {
//     console.log(varia);
// } catch (error) {
//     console.log('erro');
//     console.log('error = ',error);
// }

// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         // throw ('x e y precisam ser números.');
//         throw new Error('x e y precisam ser números.');
//     }
//     return x + y;
// }
// try {

//     console.log('soma(1,2) = ',soma('1',2));
// } catch (error) {
//     console.log('Erro na funcao');
//     console.log('error = ',error);
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Nao é instancia tipo: new Date()');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
    });
}

// function chamaHora(){
//     const data = retornaHora();
//     console.log('data = ', data);
// }

// setInterval(chamaHora,1000);

const timer = setInterval(function () {
    const data = retornaHora();
    console.log('data = ', data);
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 10000);
