// Querys
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');

//Event Listeners
form.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);

function addTask (e) {    
    e.preventDefault();
    const li = document.createElement('li');
    li.classList.add('collection-item');
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = "<i class='fa fa-remove'></i>";
    li.appendChild(link);
    taskList.appendChild(li);
}

function deleteTask(e){
    e.preventDefault();
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove()
    }
}