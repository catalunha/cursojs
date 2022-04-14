// se nao usar arrow function o this tem q ser definido pelo bind.
```js
    cliqueBotoes() {
      document.addEventListener('click', function (event) {
        const el = event.target;
        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }
      }.bind(this));
    },
```
// se usar arrow function, (event)=>{}, o this é o calculadora.
```js
    cliqueBotoes() {
      document.addEventListener('click', (event) =>{
        const el = event.target;
        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }
      });
    },
```
