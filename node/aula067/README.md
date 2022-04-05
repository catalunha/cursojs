
# Params
//http://site.com/projeto?nome=ana&apelido=aninha

# Recriar node/express
npm init -y
npm install express

//nodemon
$ npm install nodemon --save-dev

$ npm run nodemon server.js
// old package.json
    "start": "node server.js",
// new
    "start": "nodemon server.js"

$ npm start

$ npm install ejs