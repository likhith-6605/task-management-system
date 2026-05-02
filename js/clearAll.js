function clearAllTasks(){

if(confirm("Are you sure?")){
document.getElementById("taskList").innerHTML = "";
saveTasks();
updateCount();
}

}