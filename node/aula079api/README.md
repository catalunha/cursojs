# instalando o editor config no vs code
Para controlar padrao de edição
 veja arquivo .editorconfig

# iniciar npm

catalunha@pop-os:~/myapp/cursojs/node/aula079api$ npm init -y

catalunha@pop-os:~/myapp/cursojs/node/aula079api$ npx eslint --init
Need to install the following packages:
  eslint
Ok to proceed? (y) y
You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
  @eslint/create-config
Ok to proceed? (y) y
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · node
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-airbnb-base@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.2
✔ Would you like to install them now with npm? · No / Yes
Installing eslint-config-airbnb-base@latest, eslint@^7.32.0 || ^8.2.0, eslint-plugin-import@^2.25.2

added 143 packages, and audited 144 packages in 12s

45 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Successfully created .eslintrc.js file in /home/catalunha/myapp/cursojs/node/aula079api
catalunha@pop-os:~/myapp/cursojs/node/aula079api$

# eslint
acrescentar estes itens no json
    "eslint.validate": [
        {
            "language": "javascript",
            "autoFix": true
        },
    ],
    "eslint.autoFixOnSave": true,

# nodemon e sucrase
```
$ npm install nodemon sucrase --save-dev
criar o arquivo nodemon.json
criar script em package.json
  "scripts": {
    "dev":"nodemon server.js"
  },
```
rever este conceito de que import export so funciona no browser e nao no node.

# instalar express
```
$ npm install express

```

classes e funcoes construtoraas começam com letra maiuscula.

# dotenv

```
$ npm install dotenv
```

# Ações no database
instalar pacote do mariadb
```
$ npm install mariadb
```
CREATE SCHEMA escola DEFAULT CHARACTER SET = 'utf8mb4'  COLLATE = 'utf8mb4_general_ci';

MariaDB [(none)]> use escola;
MariaDB [escola]> show tables;
MariaDB [escola]> SHOW COLUMNS FROM alunos;
MariaDB [escola]> select * from alunos;



https://sebhastian.com/sequelize-date-format/

# ações no sequelize
instalando pacote do sequelize

```
$ npm install sequelize
$ npm install sequelize-cli --save-dev
```
gerar uma migration pra criar os campos
```
$ npx sequelize migration:create --name=alunos
```
aplicar a migration na database
```
$ npx sequelize db:migrate
```
desfazer uma tabela
```
$ npx sequelize db:migrate:undo
```

## criando alunos
```
$ npx sequelize migration:create --name=alunos
```
Arquivo original de migration pra editar campos:
```
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
```
apos construir a tabela pede para realizar a migration
```
$ npx sequelize db:migrate
```
## crindo users
exec o comando
```
$ npx sequelize migration:create --name=users
```
O sequelize cria a migration em
src/database/migrations/20220407192347-users.js

edita o necessario para criar a tabela. e mandar criar com
```
$ npx sequelize db:migrate
```
# bcryptjs
instalar para cryptografar a senha
```
$ npm install bcryptjs
```


# nome padrao dos methods
cruld| nomes rest | metodos | descrição
---|---|---|---
create |post| create/store | cria um novo usuario
read |get/:id| show | mostra um usuario
list | get |index | lista todos os usuarios
delete |delete| delete | apagar usuario
update |put/:id| update | troca o objeto inteiro
update |patch/:id| update | altera um valor pontual




# instalando o jsonwebtoken

```
$ npm install jsonwebtoken
```
