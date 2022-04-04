# Aula
https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/learn/lecture/16630204#reviews

# Cmds
$ npm init

//em dev dependencies
$ npm install --save-dev @babel/cli @babel/preset-env @babel/core babel-loader webpack webpack-cli

//em dependencies
$ npm install core-js regenerator-runtime

// editar webpack.config.js

//editar package.json com
//     "carregawebpack":"webpack -w"

// executar o webpack para converter automaticamente os js moderno para antigo
$ npm run carregawebpack

// quando reutilizar este modelo ele vem sem o node_modules. entao basta digitar npm install que ele vai buscar o que é necessario pra instalação dos packages.

// abrir live good

$ npm install style-loader css-loader

// deu um erro quando atualizei e depois pedi a instalação. tive que apagar o node_modules e recriar novamente com npm install.