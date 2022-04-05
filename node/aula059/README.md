$ npm init -y

// instala a versao mais atual
// "express": "^4.17.3"
//e atualiza automaticamente apenas dentro de 4.x.x
$ npm install express

// instala a versao especifica atual e nao atualiza
// "express": "4.17.3"
$ npm install express -E

// update pacotes necessarios
$ npm update


// instala pacotes como devdependencies
$ npm install express --save-dev

// instala pacotes como dependencies de produção ou normal
$ npm install express --save-prod


// instala o pacote na versão especifica
//2.1.0
//major.minor.patch
//major -> recurso que quebra versoes anteriores]
//minor -> recurso que nao quebra as anteriores e é melhor que correções
//patch -> bugs/ajustes que não acrescentam nada.
$ npm install express@2.1.0


// apagar pacote
$ npm uninstall express

//lista tudo de todos os pacotes atuais
$ npm ls

//lista pacotes ate nivel x
$ npm ls --depth=0


// ver pacotes desatualizados
$ npm outdated