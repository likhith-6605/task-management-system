function saveTasks(){
localStorage.setItem("tasks",
document.getElementById("taskList").innerHTML);
}

function loadTasks(){
document.getElementById("taskList").innerHTML =
localStorage.getItem("tasks");
updateCount();
}