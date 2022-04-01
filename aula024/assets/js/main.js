const textTask = document.querySelector('.input-tarefa')
const addTask = document.querySelector('.btn-tarefa')
const listTask = document.querySelector('.tarefas')
let deleteTask;
let tasks = [];
updateTodo();
addTask.addEventListener('click', function (event) {
  if (!textTask.value) return;
  console.log('textTask = ', textTask.value);
  criarTask(textTask.value);
  const li = criarLi();
  // alimentaLi(li);
  reAlimentaLi(li,textTask.value)
  console.log('textTask = ', tasks);
});

function criarTask(text) {
  tasks.push(textTask.value);
  updateStorage();
}

function criarLi() {
  const li = document.createElement('li');
  return li;
}
// function alimentaLi(li) {
//   li.innerText = tasks[tasks.length - 1];
//   li.innerText += '  ';
//   criarBotao(li);
//   listTask.appendChild(li);
// }

function criarBotao(li) {
  const botao = document.createElement('button');
  // botao.className='botao';
  botao.setAttribute('class', 'apagar');
  botao.setAttribute('txt', 'apagarText');
  botao.innerText = 'Apagar';
  li.appendChild(botao);
}

document.addEventListener('click', function (event) {
  const el = event.target;
  if (el.classList.contains('apagar')) {
    console.log('apagar clicaddo');
    console.log('el.parentElement = ', el.parentElement);
    console.log('el.parentElement = ', el.parentElement.innerText);
    const index = apagarLi(el);
    // let text = el.parentElement.innerText;
    // text=text.replace('Apagar', '').trim();
    // console.log('text = *',text,'*');
    // const index = tasks.indexOf(text);
    // console.log('index = ',index);
    // el.parentElement.remove();
    apagarTask(index);
    // tasks.splice(index,1);
    // console.log('tasks = ',tasks);
    // const tarefaJson = JSON.stringify(tasks);
    // localStorage.setItem('tasks',tarefaJson); 
  }
});

function apagarLi(el){
  let text = el.parentElement.innerText;
  text=text.replace('Apagar', '').trim();
  console.log('text = *',text,'*');
  const index = tasks.indexOf(text);
  console.log('index = ',index);
  el.parentElement.remove();
  return index;
}
function apagarTask(index){
  tasks.splice(index,1);
  console.log('tasks = ',tasks);
  updateStorage();
}

function updateStorage(){
  const tarefaJson = JSON.stringify(tasks);
  localStorage.setItem('tasks',tarefaJson); 
}

function getTarks(){
  const tasksTemp = localStorage.getItem('tasks');
  tasks=JSON.parse(tasksTemp);
  // console.log('tasks = ',tasks);
  // console.log('tasksTemp = ',tasksTemp);
  // console.log('tasksTemp2 = ',tasksTemp2);
}
function updateTodo(){
  getTarks();
  for (const task of tasks) {
    const li = criarLi();
    reAlimentaLi(li,task);
  }
}

function reAlimentaLi(li,task) {
  li.innerText = task;
  li.innerText += '  ';
  criarBotao(li);
  listTask.appendChild(li);
}
