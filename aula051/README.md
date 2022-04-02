# Aula
https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/learn/lecture/16628772#reviews

# Comandos
$ npm init -y

$ npm install --save-dev @babel/cli @babel/preset-env @babel/core

$ npx babel main.js -o bundle.js --presets=@babel/env

Edit package.json
    "convertWithBabel":"babel main.js -o bundle.js --presets=@babel/env -w"

$ npm run convertWithBabel