function editTask(button){
let newTask = prompt("Edit Task");
button.parentElement.firstChild.textContent = newTask;
saveTasks();
}