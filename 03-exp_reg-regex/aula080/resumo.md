simbolo | exemplo | descricao
---|---|---
g | - | global - encontrada todas as ocorrencias
i | - | case insensitive
m | - | multiline.analisa tudo a cada nova linha
() | - | grupos dentro de uma mesma seguencia de caracteres
(aa(bb)aa)(cc) | - | grupos podem ser referenciados por $1 para aa $2 para bb $3 para cc. 
\1 |-| sao retrovisores de grupos. (aa) \1 -> \1 é um retrovisor do grupo de aa
\| | - | ou de OR lógico
\\ | - | caracter de escape tipo pra isto no md \|
{min,max} |-| caractere aparece min ou max de vezes. a falta é infinito
{quantidade} |-| quantidade de caractere
\* | - | opcionais 0 ou n vezes {0,}
\+ | - | obrigatorio 1 ou n vezes {1,}
? | - | opcionais 0 ou 1 vez {0,1}
. | - | representa qq caracter
[] |-| qq coisa dentro deste conjunto
[^] |-| nega um valor neste conjunto
[inicio-fim] |-| range de caracteres 
\w |-| atalho para caracter. ver documentação 
\W |-| atalho para caracter. ver documentação 
\d |-| atalho para digito. ver documentação 
\D |-| atalho para digito. ver documentação 
\s |-| atalho para espaços. ver documentação 
^() |-| começa com . ver documentação 
$() |-| termina com . ver documentação 