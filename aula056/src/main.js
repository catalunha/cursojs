import { GerarSenha } from './modules/gerar_senha';
import './assets/css/style.css';

const senhaGerada = document.querySelector('.senha-gerada');
const gerarSenha = document.querySelector('.gerar-senha');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');

document.addEventListener('click', (event) => {
    // event.preventDefault();
    console.log('chkMaiusculas.checked = ',chkMaiusculas.checked);
    const targetEvent = event.target;
    if (targetEvent.classList.contains('gerar-senha')) {
        const cond={
            qtdChar:qtdCaracteres.value,
            isUpperChar:chkMaiusculas.checked,
            isLowerChar:chkMinusculas.checked,
            isNumberChar:chkNumeros.checked,
            isSymbolChar:chkSimbolos.checked,
            
        };
        console.log('cond = ',cond);
        const gerarSenha = new GerarSenha(cond);
        senhaGerada.innerHTML = gerarSenha.gerar();

    }
});


