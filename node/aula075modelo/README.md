
# 3 passos importantes para recriar um projeto modelo
isto recriar a pasta node_modules com as dependencias do package.json
$ npm install

//iniciar servidor. chamando o script start que esta em package.json ativa o servidor permanentemente
$ npm start

//se quiser testar o servidor pode usar o 
$ node server.js

//executar o webpack para atualizar o js moderno para oldjs
$ npm run webpack

# Nesta aula
instalando o helmet para evitar injeção de outro form ou dados no site

$ npm install helmet
$ npm install csurf