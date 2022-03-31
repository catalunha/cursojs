const data1 = ['a',1,true,null,2]
console.log(`data1[${data1}]`);

let data2=data1;
data2.push(3);
console.log(`data1[${data1}], data2[${data2}]`);
let data3=[...data1];
data3.push(4);
console.log(`data1[${data1}], data2[${data2}], data3[${data3}]`);
