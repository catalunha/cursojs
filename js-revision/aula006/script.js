let varA='A';
let varB='B';
let varC='C';

// let temp = varA;
// varA = varB;
// varB = varC;
// varC = temp;

// console.log(`A,B,C = ${varA},${varB},${varC}`);

[varA,varB,varC]=[varB,varC,varA];

console.log(`A,B,C = ${varA},${varB},${varC}`);