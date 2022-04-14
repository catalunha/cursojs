const texto1 = `
João trouxe  flores para sua amada namorada em 10 janeiro de 1970,
Maria era o nome dela.

Foi um ano excelente na vida de joão. Teve 2 filhos (Ana, bia), todos adultos atualmente.
maria, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de
domingo. Também né! Sendo a boa mineira que é, nunca esquece seu famoso
pão de queijo.
Não canso de ouvir a Maria:
"joooooooãooooo, o café tá prontinho aqui. Veeemm"!
Não canso de ouvir a João:
"Jaaaaá vou mulher"
`;

const arquivos = [
'Atenção.jpg',
'FOTO.JPeeeG',
'Meu gatinho.jpg',
'Meu gatinho.JPG',
'Meu gatinho.JPEG',
'Marido.png',
'lista de compras.txt',
];

const html = '<p>Olá mundo</p> <p>Olá de novo</p>'
const html2 = `<p 
class="a">Olá mundo</p> <p class="a">Olá mundo2</p><div>Sou a div</div>`;

const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ âáà abcdefghijklmnopqrstuvwxyz def ®© 0123456789 ©';

const cpfs = `
Os CPFs são:
478.965.785-85 785.632.415-74 471.852.963-12

147.258.369-98
`;


const ips = `
Os IPs são:
0.0.0.0
192.168.0.25
10.10.5.12
255.255.255.255
355.255.255.255
`;

const logs =`
ONLINE 192.168.1.2 ABADSS active
OFFLINE 192.168.1.2 ABADSS inactive
`;

module.exports = {
  texto1,
  arquivos,
  html,
  alfabeto,
  cpfs,
  ips,
  html2,
  logs
}