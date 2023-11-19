const ul = document.querySelector('.task-list')
const deleteBtns = document.querySelectorAll('.remove-task')

for(let i = 0; i < deleteBtns.length; i++){
    deleteBtns[i].addEventListener('click', removeCurrentTask)
}

function removeCurrentTask(e){
    const li = e.target.parentElement
    ul.removeChild(li)
    
}

// adding a new task
const input = document.querySelector('.new-task')
const addTaskBtn = document.querySelector('.submit')

addTaskBtn.addEventListener('click', createNewTask)


function createNewTask(){
    if(input.value.length > 3){
        const newLi = document.createElement('li')
        newLi.classList.add('task')

        const span = document.createElement('span')
        span.classList.add('text')
        span.textContent = input.value

        newLi.appendChild(span)

        const btn = document.createElement('button')
        btn.classList.add('remove-task')
        btn.textContent = "x"
        newLi.appendChild(btn)

        input.value = ""

        btn.addEventListener('click', removeCurrentTask)

        ul.appendChild(newLi)
        console.log(ul)
    }
    else {
        alert('text too short')
    }
}