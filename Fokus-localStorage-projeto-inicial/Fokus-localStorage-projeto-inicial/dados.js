const taskList = document.querySelector('.app__section-task-list');
const formTask = document.querySelector('.app__form-add-task')
const toggleFormTaskBtn = document.querySelector('.app__button--add-task')
const formLabel = document.querySelector('.app__form-label')
const textArea = document.querySelector('.app__form-textarea')
const cancelButton = document.querySelector('.app__form-footer__button--cancel')
const deleteButton = document.querySelector('.app__form-footer__button--delete')
const localStorageTarefas = localStorage.getItem('tarefas')
const taskAtiveDescription = document.querySelector('.app__section-active-task-description')
console.log(deleteButton)

let tarefas = localStorageTarefas ? JSON.parse(localStorageTarefas) : []

let tarefaSelecionada = null;
let itemTarefaSelecionada = null;

let tarefaEmEdicao = null;
let paragrafoEmEdicao = null;

const selecionaTarefa = (tarefa, elemento) => {

    document.querySelectorAll('.app__section-task-list-item-active').forEach((button) => {
        button.classList.remove('app__section-task-list-item-active')
    });

    if (tarefaSelecionada == tarefa) {
        taskAtiveDescription.textContent = null;;
        itemTarefaSelecionada = null;
        tarefaSelecionada = null;
        return
    }

    tarefaSelecionada = tarefa
    itemTarefaSelecionada = elemento
    taskAtiveDescription.textContent = tarefa.descricao
    elemento.classList.add('app__section-task-list-item-active')
}

const taskIcon =`<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24"
fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="#FFF" />
<path
    d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
    fill="#01080E" />
</svg>`


const limparForm = () => {
    tarefaEmEdicao = null;
    paragrafoEmEdicao = null;
    textArea.value = ''
    formTask.classList.toggle('hidden')
}

const editarTarefa = (tarefa, elemento) => {
    limparForm()
    formLabel.textContent = 'Editando tarefa'
    tarefaEmEdicao = tarefa
    paragrafoEmEdicao = elemento
}

function createTask(tarefa) {
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')

    const svgIcon = document.createElement('svg')
    svgIcon.innerHTML = taskIcon

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('app__section-task-list-item-description')

    paragrafo.textContent = tarefa.descricao
    
    const botao = document.createElement('button')
    const editImg = document.createElement('img')
    editImg.src = '/imagens/edit.png'

    botao.classList.add('app_button-edit');
    botao.appendChild(editImg)
    botao.addEventListener('click', (event) => {
        event.stopPropagation();
        editarTarefa(tarefa, paragrafo);
    })


    li.onclick = () => {
        selecionaTarefa(tarefa,li) 
    }
    svgIcon.addEventListener('click', (event) => {
        event.stopPropagation()
        botao.setAttribute('disabled', true)
        tarefa.concluida = true
        updateLocalStorage()
        li.classList.add('app__section-task-list-item-complete')

    })
    if(tarefa.concluida) {
        botao.setAttribute('disabled', true)
        li.classList.add('app__section-task-list-item-complete')

    }
    li.appendChild(svgIcon)
    li.appendChild(paragrafo)
    li.appendChild(botao)

    return li
}

tarefas.forEach(task => {
    const taskItem = createTask(task)
    taskList.appendChild(taskItem)
})

toggleFormTaskBtn.addEventListener('click' , () => {
    formTask.classList.toggle("hidden")
})

cancelButton.addEventListener('click', () => {
    limparForm()
})

deleteButton.addEventListener('click', () => {
    textArea.value = ''
})

const updateLocalStorage = () => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

formTask.addEventListener('submit' , (evento) => {
    if(tarefaEmEdicao) {
        tarefaEmEdicao.descricao = textArea.value
        paragrafoEmEdicao.textContent = textArea.value
    }else{
    evento.preventDefault() 
        const task = {
            descricao: textArea.value,
            concluida: false
        }
   tarefas.push(task)
    const taskItem = createTask(task)
    taskList.appendChild(taskItem)

    }updateLocalStorage()
    limparForm()
})

document.addEventListener('TarefaFinalizada', function (e) { 
    console.log("raea")
    if (tarefaSelecionada) { 
            tarefaSelecionada.concluida = true
            itemTarefaSelecionada.classList.add('app__section-task-list-item-complete')
            itemTarefaSelecionada.querySelector('button').setAttribute('disabled', true)
            updateLocalStorage()
    }
})