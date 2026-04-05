function addTask() {

let taskInput = document.getElementById("taskInput");
let priority = document.getElementById("priority").value;

let task = taskInput.value;

if(task === "") {
alert("Enter task");
return;
}

let li = document.createElement("li");

li.innerHTML = task + " (" + priority + ")" +
" <button onclick='completeTask(this)'>Complete</button>" +
" <button onclick='editTask(this)'>Edit</button>" +
" <button onclick='deleteTask(this)'>Delete</button>";

document.getElementById("taskList").appendChild(li);

taskInput.value = "";

}

function deleteTask(button) {

button.parentElement.remove();

}

function editTask(button){

let newTask = prompt("Edit Task");

button.parentElement.firstChild.textContent = newTask;

}

function completeTask(button){
button.parentElement.style.textDecoration = "line-through";
}