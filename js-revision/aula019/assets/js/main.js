const elementos = [{ tag: 'p', texto: 'frase1', }, { tag: 'div', texto: 'frase2', },];


const container = document.querySelector('.container');
//versao 01
// const p = document.createElement('p');
// p.innerHTML = 'frase1';
// container.appendChild(p);
//versao 02
// elementos.forEach(element => {
//     const { tag, texto } = element;
//     console.log('tag = ', tag);
//     console.log('texto = ', texto);
//     const p = document.createElement(tag);
//     p.innerHTML = texto;
//     container.appendChild(p);
// });
//versao 03
elementos.forEach(element => {
    const { tag, texto } = element;
    console.log('tag = ', tag);
    console.log('texto = ', texto);
    const p = document.createElement(tag);
    let textElem= document.createTextNode(texto);
    p.appendChild(textElem);
    container.appendChild(p);
});