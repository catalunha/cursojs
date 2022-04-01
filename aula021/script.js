// function max(x, y) {
//     if (x > y) { return x; } else { return y; }
// }
// const res = max(11,2);
// console.log('res = ',res);


function fizzbuzz(value) {
    console.log('value%3 = ',value%3);
    if (!(value % 3)) {
        console.log('fizz');
    }
    if (!(value % 5)) {
        console.log('buzz');
    }
    if (!(value % 3)&&!(value % 5)) {
        console.log('fizzbuzz');
    }

}
fizzbuzz(15);