class ControleRemoto {
    constructor (tv) {
        this.tv = tv;
        this.volume = 0;
    }
    aumentarVolume() {
        this.volume += 2;
        console.log(this);//instancia
    }
    diminuirVolume() {
        this.volume -= 2;
    }
    static trocaPilha() {
        console.log('trocar pilha');
        console.log(this);//classe
    }
}

const tv1 = new ControleRemoto('ss');
console.log('tv1 = ', tv1);
tv1.aumentarVolume();
tv1.aumentarVolume();
console.log('tv1 = ', tv1);
ControleRemoto.trocaPilha();