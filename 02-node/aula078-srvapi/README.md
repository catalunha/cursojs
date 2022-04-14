# Config do MariaDB no GCP
container: bdmariadb1
imagem: mariadb
MYSQL_ROOT_PASSWORD=ctn_mariadb_srv_gcp


# Comandos Docker

$ sudo docker ps
$ sudo docker stop bdmariadb1
$ sudo docker start bdmariadb1
$ sudo docker restart bdmariadb1


# Conecting com MariaDB no host

Conectando ao mariadb remotamente na porta especificada.
```
catalunha@pop-os:~$ mysql -h 34.95.224.209 -P 3306 -u root -p
Enter password: ctn_mariadb_srv_gcp
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 3
Server version: 10.7.3-MariaDB-1:10.7.3+maria~focal mariadb.org binary distribution

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> 
```


# Deploy da  API

## Acessar GCP
https://console.cloud.google.com/compute/instances?project=zeta-bebop-346419


## construir o build
conforme scripts em package basta executar
$ npm run build

de executar o servidor

$ npm start


## iniciar git localmente

$ nano .gitignore
/node_modules
node_modules
**node_modules
.env

$ git init
$ git add .
$ git commit -m 'fim projeto inicio send server'

## iniciar git no servidor

$ mkdir api
$ mkdir repo-api
catalunha@cursojs:~$ cd repo-api/
catalunha@cursojs:~/repo-api$ git init --bare
catalunha@cursojs:~/repo-api$ cd ..
catalunha@cursojs:~$ cd api/
catalunha@cursojs:~/api$ git init
catalunha@cursojs:~/api$ git config user.name 'catalunha'
catalunha@cursojs:~/api$ git config user.email 'catalunha.mj@gmail.com'
catalunha@cursojs:~/api$ git commit -am 'Start. All empty'
catalunha@cursojs:~/api$ git remote add repo-api_gcp_cursojs /home/catalunha/repo-api/
catalunha@cursojs:~/api$ git remote -v
repo-api_gcp_cursojs	/home/catalunha/repo-api/ (fetch)
repo-api_gcp_cursojs	/home/catalunha/repo-api/ (push)
catalunha@cursojs:~/api$ 


## voltar o git local

catalunha@pop-os:~/myapp/cursojs_aula079_api$ git remote add repo-api_gcp_cursojs 34.95.224.209:repo-api/
catalunha@pop-os:~/myapp/cursojs_aula079_api$ git remote -v
repo-api_gcp_cursojs	34.95.224.209:repo-api/ (fetch)
repo-api_gcp_cursojs	34.95.224.209:repo-api/ (push)
catalunha@pop-os:~/myapp/cursojs_aula079_api$ 
catalunha@pop-os:~/myapp/cursojs_aula079_api$ git push repo-api_gcp_cursojs master

## volta a pasta do servidor
catalunha@cursojs:~/api$ git pull repo-api_gcp_cursojs master

## git
se usar o:
$ git push repo-api_gcp_cursojs master -u
ele registra o local e branch e precisa dar apenas
$ git push
da proxima vez
o mesmo vale para git pull

## continuando
editar .env
npm install
npm start

catalunha@cursojs:~/api$ pm2 start /home/catalunha/api/dist/server.js --name=api
[PM2] Starting /home/catalunha/api/dist/server.js in fork_mode (1 instance)
[PM2] Done.
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ AppContatos        │ fork     │ 16   │ online    │ 0%       │ 79.2mb   │
│ 1  │ api                │ fork     │ 0    │ online    │ 0%       │ 26.6mb   │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
catalunha@cursojs:~/api$ pm2 ls
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ AppContatos        │ fork     │ 16   │ online    │ 0%       │ 78.8mb   │
│ 1  │ api                │ fork     │ 0    │ online    │ 0%       │ 51.2mb   │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
catalunha@cursojs:~/api$ curl http://localhost:3001
{"home":"rota inicial"}catalunha@cursojs:~/api$ cd /etc/nginx/sites-enabled/
catalunha@cursojs:/etc/nginx/sites-enabled$ ls -la
total 12
drwxr-xr-x 2 root root 4096 Apr  6 21:53 .
drwxr-xr-x 8 root root 4096 Apr  6 21:33 ..
-rw-r--r-- 1 root root 1172 Apr  6 21:39 app-contatos
catalunha@cursojs:/etc/nginx/sites-enabled$ sudo cp app-contatos app-api
catalunha@cursojs:/etc/nginx/sites-enabled$ ls
app-api  app-contatos
catalunha@cursojs:/etc/nginx/sites-enabled$ sudo nano app-api

```
server {
  listen 80;
  listen [::]:80;
  server_name 34.95.224.209;

  location / {
    proxy_pass http://localhost:3001;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }

  location ~ /\.ht {
    deny all;
  }

  location ~ /\. {
    access_log off;
    log_not_found off;
    deny all;
  }

  access_log off;
  #access_log  /var/log/nginx/34.95.224.209-access.log;
  error_log /var/log/nginx/34.95.224.209-error.log;
}
```
catalunha@cursojs:/etc/nginx/sites-enabled$ sudo systemctl stop nginx
catalunha@cursojs:/etc/nginx/sites-enabled$ sudo systemctl start nginx

permitir nginx aceitar arquivos grandes

catalunha@cursojs:/etc/nginx$ sudo nano /etc/nginx/nginx.conf 
...
http {
        client_max_body_size 10M;
...

consertando o caminho dos arquivos staticos
edita em localhost e envia para servidor
catalunha@pop-os:~/myapp/cursojs_aula079_api$ git add .
catalunha@pop-os:~/myapp/cursojs_aula079_api$ git commit -m 'resolvendo caminho de fotos'
[master ff8d1f9] resolvendo caminho de fotos
 9 files changed, 14 insertions(+), 10 deletions(-)
 create mode 100644 uploads/images/1649501075982_15723.png
 create mode 100644 uploads/images/1649501147025_17627.png
 create mode 100644 uploads/images/1649501267184_17123.png
catalunha@pop-os:~/myapp/cursojs_aula079_api$ git push repo-api_gcp_cursojs master

catalunha@cursojs:~/api$ git pull repo-api_gcp_cursojs master


restart pm2
