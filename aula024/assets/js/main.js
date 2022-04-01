const textTask = document.querySelector('.input-tarefa')
const addTask = document.querySelector('.btn-tarefa')
const listTask = document.querySelector('.tarefas')
let deleteTask;
let tasks=[];
addTask.addEventListener('click', function (event) {
  if (!textTask.value) return;
  console.log('textTask = ', textTask.value);
  criarTask(textTask.value);
  const li = criarLi();
  alimentaLi(li);
  console.log('textTask = ', tasks);
});

function criarTask(text){
  tasks.push(textTask.value);
}

function criarLi(){
  const li = document.createElement('li');
  return li;
}
function alimentaLi(li){
    li.innerText = tasks[tasks.length-1];
    li.innerText += '  ';
    criarBotao(li);
    listTask.appendChild(li);
}

function criarBotao(li){
const botao = document.createElement('button');
// botao.className='botao';
botao.setAttribute('class','apagar');
botao.innerText = 'Apagar';
li.appendChild(botao);
}