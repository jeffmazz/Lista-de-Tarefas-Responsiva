const fieldTask = document.querySelector("#fieldTask")
const addButton = document.querySelector("#addButton")
const list = document.querySelector("#list")
const tasks = []

/* TASK VALIDATOR */

function taskValidator() {
    if(fieldTask.value == "") {
        return true
    }    
}

/* ADD TASK */

function addTask() {
    if(taskValidator()) {
        alert('Por favor, digite a sua tarefa')
        fieldTask.focus()
        return
    }

    createTask()
    updateList()
    fieldTask.value = ""
    fieldTask.focus()
}

/* ADD BUTTON EVENT */
addButton.addEventListener('click', () => addTask() )

/* CREATE TASK FUNCTION */
function createTask() {
    const p = document.createElement('p')
    p.innerHTML = ` <span class='taskText'> ${fieldTask.value} </span> <span class='btnDone'> <img src="./fotos/verificado.png"> </span> <span class='btnDelete'> <img src="./fotos/lixeira.png"> </span>`
    p.classList.add('listItem')

    tasks.push(p)

    p.querySelector('.btnDone').addEventListener('click', () => {
        p.classList.toggle('taskDone')

        if(p.classList.contains('taskDone')) {
            p.style.background = 'rgba(144,238,144,.6)'
            p.style.transition = '.5s'
        } else {
            p.style.background = 'transparent'
        }

    })

    p.querySelector('.btnDelete').addEventListener('click', () => {
        const question = window.confirm('Deseja realmente excluir essa tarefa ?')
        if(question) {
            tasks.splice(tasks.indexOf(p),1)
            updateList()
        }
        return
    })
}

/* UPDATE LIST EVENT */

function updateList() {

    list.innerHTML = ""

    tasks.forEach((task) => {

        list.appendChild(task)

    })

}

/* KEYBOARD EVENT */

window.addEventListener('keyup', (e) => {

    switch(e.key) {
        case 'Enter' :
            addTask()
            break;
    }

})

/* Light and Dark Modes Events */

const divThemes = document.querySelector('#themes')
const radios = document.querySelectorAll('input[type=radio]')

divThemes.addEventListener('click', () => {
    
    if(radios[0].checked) {
        document.body.style.backgroundImage = 'url(./fotos/body-background-1.jpg)'
        document.body.style.backgroundPosition = 'center center'
        addButton.style.background = 'rgb(217,167,162)'
    } else {
        document.body.style.backgroundImage = 'url(./fotos/body-background-2.jpg)'
        document.body.style.backgroundPosition = 'center bottom'
        addButton.style.background = 'rgb(5,20,49)'
    }

})