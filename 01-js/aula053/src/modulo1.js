export const nome = 'ana';
const snome = 'costa';
const idade = 30;
export function soma(x, y) {
    return x + y;
}
export default function subtrair(x, y) {
    return x - y;
}
export class Pessoa {
    constructor (nome, snome) {
        this.nome = nome;
        this.snome = snome;
    }
}
export { snome as snome2, idade };

// export aqui desta forma ou na propria var, fun, class
// export default subtrair;
// export default {var1,var2}