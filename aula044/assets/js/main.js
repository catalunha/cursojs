class ValidaForm {
  constructor () {
    this.form = document.querySelector('.formulario');
    this.eventos();
  }
  eventos() {
    this.form.addEventListener('submit', event => {
      this.handleSubmit(event);
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('+++ apagando erros...');
    this.limparErros();
    // for (let campo of this.form.querySelectorAll('.error-text')) {
    //   console.log('campos error');
    //   // console.log(`removendo1 ${campo.text}`);
    //   // campo.remove();
    // }
    console.log('--- apagando erros...');

    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();
    if (camposValidos && senhasValidas) {
      alert('Enviando form...');
      this.form.submit();
    }
  }
  limparErros() {
    for (let campo of this.form.querySelectorAll('.error-text')) {
      campo.remove();
    }
  }
  camposSaoValidos() {
    let valid = true;

    // // this.limparErros();
    // for (let campo of this.form.querySelectorAll('.error-text')) {
    //   console.log('campos error');

    //   // console.log(`removendo2 ${campo.value}`);
    //   campo.remove();

    // }
    for (let campo of this.form.querySelectorAll('.validar')) {
      let label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.criarErro(campo, `Campo "${label.toUpperCase()}" não pode estar em branco`);
        valid = false;
      }
      if (campo.classList.contains('cpf')) {
        if (!this.isCPFValid(campo)) {
          const cpfNovo = new GerarCPF();
          this.criarErro(campo, `CPF inválido. Tente este: ${cpfNovo.gerar()}`);
          // this.criarErro(campo, `CPF inválido`);
          valid = false;
        }
      }
      if (campo.classList.contains('usuario')) {
        const msg = this.isUsuarioValid(campo);
        if (msg !== '') {
          this.criarErro(campo, msg);
          valid = false;
        }
      }
    }
    return valid;
  }

  senhasSaoValidas() {
    let valid = true;
    // for (let campo of this.form.querySelectorAll('.error-text')) {
    //   campo.remove();
    // }
    const senha1 = this.form.querySelector('.senha1');
    const senha2 = this.form.querySelector('.senha2');
    if (senha1.value !== senha2.value) {
      this.criarErro(senha2, `Senha diferente da anterior`);
      valid = false;
    }
    if (senha1.value.length <= 3 || senha1.value.length >= 6) {
      this.criarErro(senha1, `Senha entre 3 a 6 caracteres`);
      this.criarErro(senha2, `Senha entre 3 a 6 caracteres`);
      valid = false;
    }
    return valid;
  }
  isUsuarioValid(campo) {
    const usuario = campo.value;
    if (!(campo.value.length >= 3 && campo.value.length <= 6)) return 'Caracteres entre 3 e 6';
    if (!(usuario.match(/^[a-zA-Z0-9]+$/g))) return 'Apenas letras e numeros';
    return '';
  }
  isCPFValid(campo) {
    const cpf = new ValidarCPF(campo.value);
    return cpf.validar();
  }
  criarErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
}
const validaForm = new ValidaForm();