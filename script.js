function addTask() {

let taskInput = document.getElementById("taskInput");
let dueDate = document.getElementById("dueDate").value;
let priority = document.getElementById("priority").value;

let task = taskInput.value;

if(task === ""){
alert("Enter task");
return;
}

let li = document.createElement("li");

li.innerHTML =
task + " | " +
"Due: " + dueDate + " | " +
priority +

" <button onclick='completeTask(this)'>Complete</button>" +
" <button onclick='editTask(this)'>Edit</button>" +
" <button onclick='deleteTask(this)'>Delete</button>";

document.getElementById("taskList").appendChild(li);

taskInput.value = "";

saveTasks();
updateCount();
}


function deleteTask(button){
button.parentElement.remove();
saveTasks();
updateCount();
}


function editTask(button){

let newTask = prompt("Edit Task");

button.parentElement.firstChild.textContent = newTask;

saveTasks();
}


function completeTask(button){

button.parentElement.classList.toggle("completed");

saveTasks();
}


function updateCount(){

let count = document.querySelectorAll("li").length;

document.getElementById("taskCount").textContent = count;
}


function filterTasks(type){

let tasks = document.querySelectorAll("li");

tasks.forEach(task => {

if(type === "all"){
task.style.display = "block";
}

else if(type === "completed"){
if(task.classList.contains("completed")){
task.style.display = "block";
}
else{
task.style.display = "none";
}
}

else{
if(!task.classList.contains("completed")){
task.style.display = "block";
}
else{
task.style.display = "none";
}
}

});
}


function saveTasks(){

localStorage.setItem("tasks",
document.getElementById("taskList").innerHTML);

}


function loadTasks(){

document.getElementById("taskList").innerHTML =
localStorage.getItem("tasks");

updateCount();

}


loadTasks();