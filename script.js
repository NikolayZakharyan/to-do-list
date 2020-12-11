
//Selectores

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todo = document.querySelector('.todo')


//Event listners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCkeck);


//Functions

function addTodo(event) {
    
    //Prevent form from submitting
    event.preventDefault();
    console.log('hefafas')
    //todo DIV
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    //creat LI
    const newTodo = document.createElement('li')
    newTodo.innerHTML = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    //CHECK MARK BUTTOTN
    const completeButton = document.createElement('button'
    )
    completeButton.innerHTML = '<i class="fas fa-check"></i>'
    completeButton.classList.add('complete-btn')
    todoDiv.appendChild(completeButton)
    //CHECK trash BUTTOTN
    const trashButton = document.createElement('button'
    )
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)


    //appent to do DIV
    todoList.appendChild(todoDiv)
    todoInput.value = ''




}


function deleteCkeck(e) {
    const click = e.target

    

    console.log(click.parentElement)

    if (click.classList[0] === 'trash-btn') {
        click.parentElement.classList.add('fall')
        click.parentElement.addEventListener('transitionend', () => {
        click.parentElement.remove()
            
        })
    } 

    //.complete-btn--complate

    if (click.classList[0]==='complete-btn') {
        click.classList.toggle('complete-btn-complate')
        click.parentElement.classList.toggle('complete-btn-complate')

    } 

}


console.log(null >= 0)