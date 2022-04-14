const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;
iniciar.addEventListener('click', function (event) {
  iniciarRelogio();
})
pausar.addEventListener('click', function (event) {
  stopTimer();

})
zerar.addEventListener('click', function (event) {
  zerarTimer();
})
function zerarTimer(){
  stopTimer();
  segundos = 0;
  relogio.innerHTML = criaHoraDosSegundos(segundos);
}
function stopTimer() {
  clearInterval(timer);

}
function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC',
  });
}
console.log('criaHoraDosSegundos(10) = ', criaHoraDosSegundos(10));

function iniciarRelogio() {
  stopTimer();

  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}