const {cpfs,ips} =require('../aula080/textos')

// console.log(cpfs.match(/[0-9]/g));
console.log(cpfs.match(/[0-9]+\.[0-9]+\.[0-9]+-[0-9]+/g));
console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/g));
console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g));
console.log(cpfs.match(/(\d{3}\.){2}\d{3}-\d{2}/g));
console.log(ips.match(/[0-192]+\.[0-9]+\.[0-9]+\.[0-9]+/g));