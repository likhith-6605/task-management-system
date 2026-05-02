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
task + " | Due: " + dueDate + " | " + priority +
" <button onclick='completeTask(this)'>Complete</button>" +
" <button onclick='editTask(this)'>Edit</button>" +
" <button onclick='deleteTask(this)'>Delete</button>";

document.getElementById("taskList").appendChild(li);

taskInput.value = "";

saveTasks();
updateCount();
}