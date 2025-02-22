//get element by ID
const addTaskButton = document.getElementById('addTask');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('items');
const completedList = document.getElementById('completed-list');

//add task button
addTaskButton.addEventListener("click",handelAddTask)

//for add/edit mode 
let isAdd=true;

//select edit item
let selectEdit=null;

//handel delete
function handeleDelete(e) {
    e.target.parentNode.remove();
}

//handel complete
function handelComplete(e) {
    const task = e.target.parentNode.children[1].textContent; 
    const completeLi = document.createElement("li");
    completeLi.classList.add("item");
    completeLi.textContent=task;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");

    deleteButton.textContent="Delete";
    deleteButton.addEventListener("click",handeleDelete);

    completeLi.appendChild(deleteButton);
    completedList.appendChild(completeLi);

    e.target.parentNode.remove();
}

//create element for add task
function createTaskElement(task) {
    const li=document.createElement("li");
    li.classList.add("item");

    const input= document.createElement("input");
    input.type="checkbox";
    li.appendChild(input);
    input.addEventListener("click",handelComplete);
    
    const lebel= document.createElement("lebel");
    lebel.textContent=task;
    li.appendChild(lebel);

    const editButton=document.createElement("button");
    editButton.textContent="Edit";
    editButton.classList.add("edit");
    li.appendChild(editButton);
    editButton.addEventListener("click",handelEditTask);

    return li;
}

//Update Task
function updateTask(task) {
    selectEdit.textContent=task;
    addTaskButton.value="Add Task";
}

//Add Task
function handelAddTask(event) {
    event.preventDefault();
    let task = taskInput.value

    if(task=="") return;
    
    if(isAdd===false){
        isAdd=true;
        taskInput.value="";
        updateTask(task);
    }
    else{
        taskList.appendChild(createTaskElement(task))
        
        taskInput.value = "";
    }
}

//Edit Button
function handelEditTask(e) {
    addTaskButton.value="Update Task";
    const task = e.target.parentNode.children[1].textContent;
    taskInput.value=task;
    isAdd=false;
    selectEdit = e.target.parentNode.children[1];
}