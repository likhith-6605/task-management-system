function completeTask(button){
button.parentElement.classList.toggle("completed");
saveTasks();
}