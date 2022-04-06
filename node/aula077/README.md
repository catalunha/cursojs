# Criando o servidor no GCP

# Endereço IP estatico da VM no GCP
34.95.224.209


# SSH
```
catalunha@pop-os:~/myapp/cursojs/node/aula077$ ssh-keygen -f ~/.ssh/cursojs -t rsa -b 4096
Generating public/private rsa key pair.
Created directory '/home/catalunha/.ssh'.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/catalunha/.ssh/cursojs
Your public key has been saved in /home/catalunha/.ssh/cursojs.pub
The key fingerprint is:
SHA256:8ewdeT2GFCnoOxrzlPttU7tvBRQdl5yAiIbD8PwUbEk catalunha@pop-os
The key's randomart image is:
+---[RSA 4096]----+
|   .o +Eo o .o=+=|
|    o+ *.o o .o+o|
|     o+.o   .o   |
|      o  =  ..o. |
|       .S = o..+.|
|       o * . o..o|
|        * + . . o|
|       . o  .o ..|
|          .....o+|
+----[SHA256]-----+

catalunha@pop-os:~/myapp/cursojs/node/aula077$ ls ~/.ssh/cursojs*
/home/catalunha/.ssh/cursojs  /home/catalunha/.ssh/cursojs.pub
catalunha@pop-os:~/myapp/cursojs/node/aula077$ 

catalunha@pop-os:~/myapp/cursojs/node/aula077$ cat /home/catalunha/.ssh/cursojs.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDSIeo9M+ABYQEy8i4zW54I2/7jShh7l144Crcly1qeCXhQtULDdIzfW0478PUF9ntlP2+KPR/94z0TX0Vq9ypQYkoEiWIkBna0ReZXD4tIVtZKmlZbYUPxOFLkQu+jqwYUMCEA+BOe/6FmVNPSoFUPGqAvSi+pxduCTrFLvNixm/KY4tlJXrjFcbwfmFDPPvGjQpLCjv2yqTTN9gN3bGiwew0EAbyb/M652gqgq3BdUtGzAWWnj0r3SRuQSMKC63BxlK6E/TX3xz78p3QR6yAFSQqVW8w6IpR1GR+wxG2IAUcyvYY4sjPAc44eNN0+WubnTFcEdfTlmNKl7GACHZr2EtZJcWp3pIdC9YAFePKjdFOjqncBixwcq3MkbAaPMzvAcA+13IZmRdZPUfmWZ2MwIbWG9Ra7MCBiL1WkKJqrT2ewMewVPsIEcEWkdO/wBzEPRUod3UpMmWNPpdoZY7NOegYJZvLkz1+37uivm1m9ImU6dtsdwdSMVmwIgUmQnYvUKA8t2V19vwjfH8uwD4LYH/qCTHvx9AnsNHsQCodJUlmyFX7wpOru5U5ptKozfgqjsHDOiXxS2qGXy0vW8Ipy65neOF+JxYzr3nqNPnKyC2CUl+A2Xyw0kFMCHxedtRM4WRAefm73AkASRC/+pQ5SMbLbWLbzmXZ3QbIlm/6i0w== catalunha@pop-os
catalunha@pop-os:~/myapp/cursojs/node/aula077$ 

```
![](./readme-files/sshpub.png)

# acessando servidor
```
catalunha@pop-os:~/myapp/cursojs/node/aula077$ ssh catalunha@34.95.224.209
The authenticity of host '34.95.224.209 (34.95.224.209)' can't be established.
ECDSA key fingerprint is SHA256:swP5kp/CIGlbxrD/2jxc4Ob9pcyd5fRIo153higOe4U.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '34.95.224.209' (ECDSA) to the list of known hosts.
Welcome to Ubuntu 18.04.6 LTS (GNU/Linux 5.4.0-1069-gcp x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Wed Apr  6 19:47:11 UTC 2022

  System load:  0.08              Processes:           109
  Usage of /:   18.1% of 9.52GB   Users logged in:     0
  Memory usage: 5%                IP address for ens4: 10.158.0.2
  Swap usage:   0%

0 updates can be applied immediately.



The programs included with the Ubuntu system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
applicable law.


```

# Ações no servidor
```
catalunha@cursojs:~$ sudo apt update
catalunha@cursojs:~$ sudo apt upgrade


```