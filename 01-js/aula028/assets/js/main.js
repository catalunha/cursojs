function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },
    pressionaEnter() {
      this.display.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
          this.calcular();
        }
      });
    },
    clearDisplay() {
      this.display.value = '';
    },
    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },
    calcular() {
      const text = this.display.value;
      try {
        const calc = eval(text);
        if (!calc) {
          alert('Valores com erro.')
          return;
        }
        this.display.value = calc;
      } catch (error) {
        alert('Valores com erro.')
        return;
      }
      this.display.value = eval(this.display.value);
    },
    cliqueBotoes() {
      document.addEventListener('click', function (event) {
        const el = event.target;
        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }
        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }
        if (el.classList.contains('btn-del')) {
          this.deleteOne();
        }
        if (el.classList.contains('btn-eq')) {
          this.calcular();
        }
      }.bind(this));// se usar arrow function, (event)=>{}, o this é o calculadora.
    },
    btnParaDisplay(valor) {
      this.display.value += valor;
      this.display.focus();
    }

  };
}

const calculadora = criaCalculadora();
calculadora.inicia();