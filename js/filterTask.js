function filterTasks(type){

let tasks = document.querySelectorAll("li");

tasks.forEach(task => {

if(type === "all"){
task.style.display = "block";
}
else if(type === "completed"){
task.style.display = task.classList.contains("completed") ? "block" : "none";
}
else{
task.style.display = !task.classList.contains("completed") ? "block" : "none";
}

});
}