const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() { //função que cria uma linha dentro de ul
    const li = document.createElement('li'); //cria uma li
    return li; // retorna li pro resto da funçao
}

function limpaInput() { //funcão que limpa o input, depoisde enviado a a tarefa
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += " ";
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoinput) { //funçã responsável por criar tarefas
    const li = criaLi(); //chama a funçao pra criar uma li
    li.innerHTML = textoinput; //muda o html de li para o textoInput, ou seja, o texto que foi escrito no input
    tarefas.appendChild(li); //
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

inputTarefa.addEventListener('keypress', function(e) { //função que captura o click do enter no teclado
    if(e.keyCode === 13) {
        if(!inputTarefa.value) return alert('Algo de errado nao esta certo');
        criaTarefa(inputTarefa.value);
    }
}); 

btnTarefa.addEventListener('click', function(e) { //Função responsavel por capturar o click no botao
    if(!inputTarefa.value) return alert('Algo de errado nao esta certo');
    criaTarefa(inputTarefa.value);
 });

document.addEventListener('click', function(e) {
    const el =e.target; //captura cada click no documento
    // colocando console.log(el) ... podemos ver cada elemmento que é clicado

    if (el.classList.contains('apagar')) { //verifica se o elemento clicado tem a classe "apagar" se sim...
        el.parentElement.remove(); //remove o elemento pai de cada tarefa adicionada]
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); //crio uma variavel que indica todos os li dentro da ul
    const listaDeTarefas = []; //crio um array vazio com o objetivo de colocar minhas tarefas dentro

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText; //o innerText so permite a manipulaãçao de texto e o innerHTML permite uma manipulaçao completa do html como tags
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //O tarefa texto é salvo com o nome "apagar" do botao, pra isso usamos o replace pra mudar o "apagar" para ""
        listaDeTarefas.push(tarefaTexto); //listaDeTarefas recebe tarefaTexto dentro de seu array
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); //transforma a lista de tarefas em uma string no formato json
    localStorage.setItem('tarefas', tarefasJSON); //cria um espaço no proprio navegador pra armazenar todo esse array de tarefas que criei
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); 
    const listaDeTarefas = JSON.parse(tarefas) //converte o formato json de volta a um objeto no formato javascript
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();