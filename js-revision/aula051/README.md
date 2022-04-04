# Aula
https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/learn/lecture/16628772#reviews

# Comandos
// iniciar o node package modules - gerenciador de pacotes do node.

$ npm init -y

// a pasta node_modules criada deve ir para o .gitignore

// o arquivo package-lock.json pode ser apagado que ele se auto recria ou com o cmd npm install

// caso vc perca ou apague o arquivo node_modules
// com este comando abaixo ele apenas restaura todas as configurações da instalação inicial que estão em package.json (igual ao pubspec.yaml)
// $ npm install

// instalar as dependencias em dev que vc precisa para este projeto
$ npm install --save-dev @babel/cli @babel/preset-env @babel/core

// transformar o arquivo main.js com js mais moderno em bundle.js com js compativel a qq navegador.  
$ npx babel main.js -o bundle.js --presets=@babel/env

// permitir a conversar de qq arquivo durante o tempo de desenvolvimento. caso os arquivos seja necessarios em tempo real.
Edit package.json
    "convertWithBabel":"babel main.js -o bundle.js --presets=@babel/env -w"

$ npm run convertWithBabel

 // mas geralmente desenvolvemos num js moderno e depois convertemos para o bundle.js de distribuição e pronto. de uma vez só que vai funcionar.