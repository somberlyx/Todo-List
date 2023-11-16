const userInput = document.getElementById("user-todo");
const todoItems = document.getElementById("todo-item");
const addTask = document.querySelector(".add-task");

let task= '';

function addingTask(){
  if(userInput.value === ''){
    alert("Please input the task you would like to add")
  } else {
    let task = document.createElement("li");
    task.innerHTML = userInput.value;
    todoItems.appendChild(task);
    let deleteIcon = document.createElement("img");
    deleteIcon.src = 'images/cross-small-svgrepo-com.svg';
    task.appendChild(deleteIcon);
  }
  userInput.value = "";
  saveTask();
}

function saveTask(){
  localStorage.setItem("tasks", todoItems.innerHTML)
}

function showTasks(){
  todoItems.innerHTML = localStorage.getItem("tasks");
}

todoItems.addEventListener('click', function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
  } else if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
  }
  saveTask();
}, false);

addTask.addEventListener("click", ()=>{
  addingTask();
})

showTasks();