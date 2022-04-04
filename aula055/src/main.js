import { GerarCPF } from './modules/gerar_cpf';
import './assets/css/style.css';
console.log('em main');

// const novoCPF = new GerarCPF();
// const resultado = document.querySelector('.resultado');
// resultado.innerHTML = novoCPF.gerar();

(function(){
const novoCPF = new GerarCPF();
const resultado = document.querySelector('.resultado');
resultado.innerHTML = novoCPF.formatar('83691537634');
// resultado.innerHTML = novoCPF.formatar();
// resultado.innerHTML = novoCPF.gerar();

})();