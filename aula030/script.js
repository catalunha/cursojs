function* geradora1(){
    yield 'valor1';
    yield 'valor2';
    yield 'valor3';
}

const g1 = geradora1();
console.log('g1.next() = ',g1.next());
console.log('g1.next() = ',g1.next());
console.log('g1.next() = ',g1.next());
console.log('g1.next() = ',g1.next());
// function recursiva(num){
//     console.log('num = ',num);
//     if(num>=10)return;
//     num++;
//     recursiva(num);
// }
// recursiva(0);