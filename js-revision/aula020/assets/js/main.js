const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log('backgroundColorBody = ',backgroundColorBody);

for (const p of ps) {
    console.log('p = ',p);
    p.style.backgroundColor=backgroundColorBody;
    p.style.color = '#FFFFFF';
}