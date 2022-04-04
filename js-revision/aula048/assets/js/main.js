//===== com promise
const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();
    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });

  });
};

document.addEventListener('click', event => {
  const el = event.target;
  const tag = el.tagName.toLowerCase();
  if (tag === 'a') {
    event.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute('href');
  console.log('href = ', href);
  const obj = {
    method: 'GET',
    url: href,
  };
  try {
    const resolve = await request(obj);
    carregaResultado(resolve);
  } catch (error) {
    console.log('error = ', error);

  }

}

function carregaResultado(resposta) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = resposta
}
//===== Sem promise
// const request = obj => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(obj.method, obj.url, true);
//   xhr.send();
//   xhr.addEventListener('load', () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       obj.success(xhr.responseText);
//     } else {
//       obj.error(xhr.statusText);
//       // obj.error({
//       //   code: xhr.status,
//       //   msg: xhr.statusText,
//       // })
//     }
//   });
// };

// document.addEventListener('click', event => {
//   const el = event.target;
//   const tag = el.tagName.toLowerCase();
//   if (tag === 'a') {
//     event.preventDefault();
//     carregaPagina(el);
//   }
// });

// function carregaPagina(el) {
//   const href = el.getAttribute('href');
//   console.log('href = ', href);
//   request({
//     method: 'GET',
//     url: href,
//     success(resposta) {
//       // console.log('resposta = ', resposta);
//       carregaResultado(resposta);
//     },
//     error(error) {
//       console.log('error = ', error);
//     },
//   });
// }

// function carregaResultado(resposta){
//   const resultado = document.querySelector('.resultado');
// resultado.innerHTML = resposta
// }