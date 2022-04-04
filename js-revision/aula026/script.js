function rand(min = 1000, max = 5000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num);
}

//versao 02

function f1(callback) {
    setTimeout(function () {
        console.log(`f1`);
        if (callback) callback();
    }, rand());
}


function f2(callback) {
    setTimeout(function () {
        console.log(`f2`);
        if (callback) callback();
    }, rand());
}
// f1();
// f2();
f1(function () {
    f2();
});

//====================== versao 01

// function f1() {
//     const timer=rand();
//     setTimeout(function () {
//         console.log(`f1 (${timer})`);
//     },timer);
// }


// function f2() {
//     const timer=rand();
//     setTimeout(function () {
//         console.log(`f2 (${timer})`);
//     }, timer);
// }
// f1();
// f2();
