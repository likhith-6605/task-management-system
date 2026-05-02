function deleteTask(button){
button.parentElement.remove();
saveTasks();
updateCount();
}