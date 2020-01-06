// Querys
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');

//Event Listeners
form.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);
filter.addEventListener('keyup', filterTask);

//Functions
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
    taskInput.value = '';
}

function deleteTask(e){
    e.preventDefault();
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove()
    }
}

function filterTask(e){
    let filterInput = e.target.value;
    let listItems = document.querySelectorAll('.collection-item');
    for(let i = 0; i < listItems.length; i++){
        if(listItems[i].textContent.indexOf(filterInput) != -1){
            listItems[i].style.display = 'block';
        }else{
            listItems[i].style.display = 'none';
        }
    }
}