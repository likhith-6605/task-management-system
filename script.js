function addTask() {

let taskInput = document.getElementById("taskInput");

let task = taskInput.value;

if(task === "") {
alert("Enter task");
return;
}

let li = document.createElement("li");

li.innerHTML = task + 
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