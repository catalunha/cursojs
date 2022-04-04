class GerarSenha {
    constructor ({ qtdChar, isUpperChar, isLowerChar, isNumberChar, isSymbolChar }) {
        this.qtdChar = qtdChar;
        this.isUpperChar = isUpperChar;
        this.isLowerChar = isLowerChar;
        this.isNumberChar = isNumberChar;
        this.isSymbolChar = isSymbolChar;
    }
    rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
    getUpperChar = () => String.fromCharCode(this.rand(65, 91));
    getLowerChar = () => String.fromCharCode(this.rand(97, 123));
    getNumberChar = () => String.fromCharCode(this.rand(48, 58));
    getSymbolChar = () => {
        const list = '[~]{^}!@#$%&*()-_+-*|';
        return list[this.rand(0, list.length)];
    }
    gerar() {
        let chars = '';
        for (let index = 0; index < this.qtdChar; index++) {
            // if(this.isUpperChar) senha += this.getUpperChar();
            // if(this.isLowerChar) senha += this.getLowerChar();
            // if(this.isNumberChar) senha += this.getNumberChar();
            // if(this.isSymbolChar) senha += this.getSymbolChar();
            //
            this.isUpperChar && (chars += this.getUpperChar());
            this.isLowerChar && (chars += this.getLowerChar());
            this.isNumberChar && (chars += this.getNumberChar());
            this.isSymbolChar && (chars += this.getSymbolChar());
        }
        let senha = '';
        for (let index = 0; index < this.qtdChar; index++) {
            senha += chars[this.rand(0, chars.length)]
        }

        console.log('senha = ', senha);
        return senha.slice(0, this.qtdChar);
    }
}

export { GerarSenha };