// ===== modo 2
// a ordem dos dados é mantida conforme array
const pessoas = [
    { id: 1, nome: 'ana' },
    { id: 2, nome: 'bia' },
];
console.log('pessoas = ', pessoas);
const pessoasMap = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    pessoasMap.set(id,{...pessoa});
}
console.log('pessoasMap = ',pessoasMap);
console.log('pessoasMap.get(1) = ',pessoasMap.get(1));

// ===== modo 01
// a ordem dos dados é perdido e a chave é string
// const pessoas = [
//     { id: 1, nome: 'ana' },
//     { id: 2, nome: 'bia' },
// ];
// console.log('pessoas = ', pessoas);
// const pessoasMap = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     pessoasMap[id]={...pessoa};
// }
// console.log('pessoasMap = ',pessoasMap);
// console.log('pessoasMap["1"] = ',pessoasMap['1']);
