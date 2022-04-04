function main() {
  const form = document.querySelector('#formulario')

  function receberEvento(event) {
    event.preventDefault();

    const pesoObj = event.target.querySelector('#peso');
    const alturaObj = event.target.querySelector('#altura');

    const peso = Number(pesoObj.value);
    // console.log(`peso = ${peso}(${typeof peso})`);
    const altura = Number(alturaObj.value);
    // console.log(`altura = ${altura}(${typeof altura})`);

    const resultTestes = realizarTestes(peso, altura);
    if (!resultTestes) { return; }
    console.log('Passou nos testes');
    let imc = peso / (altura * altura);
    const imcText = `imc = ${imc.toFixed(2)}`;
    if (imc > 25) {
      setResutado(`Com ${imcText} vc esta GORDINHO`, false);
    } else {
      setResutado(`Com ${imcText} vc esta Saudavel`, true);
    }
  }

  form.addEventListener('submit', receberEvento);
}
function setResutado(msg, isValid) {
  const resultado = document.querySelector('#resultado')
  resultado.innerHTML = '';
  const p = isValid ? criarP('paragrafo-resultado') : criarP('bad');;

  p.innerHTML = msg;
  resultado.appendChild(p);
}
function criarP(className) {
  const p = document.createElement('p');
  p.classList.add(className);
  return p;
}
function realizarTestes(peso, altura) {
  console.log('peso = ', peso);
  console.log('altura = ', altura);
  pesoMsg();
  alturaMsg();
  let result = true;
  if (Number.isNaN(peso) || peso <= 0 || peso > 200) {
    pesoMsg('Peso errado');
    result = false;
  }
  if (Number.isNaN(altura) || altura <= 0.5 || altura > 2.5) {
    alturaMsg('Altura errada');
    result = false;
  }
  return result;
}
function pesoMsg(msg = '') {
  const pesoMsgObj = document.querySelector('#pesoMsg');
  pesoMsgObj.innerHTML = msg;
}
function alturaMsg(msg = '') {
  const alturaMsgObj = document.querySelector('#alturaMsg');
  alturaMsgObj.innerHTML = msg;
}
main();