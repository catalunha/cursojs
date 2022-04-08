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
