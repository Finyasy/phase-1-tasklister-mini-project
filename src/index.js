let form = document.getElementById("create-task-form");
let tasksItems = document.getElementById("tasks");
tasksItems.addEventListener("click", deleteTask);
// let newTaskItem = document.getElementById('new-task-description').value;

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newTask = document.getElementById('new-task-description').value;
    // console.log(newTask);

    //create a new li for newTaskItem
    let newTaskItem = document.createElement('li');
    newTaskItem.appendChild(document.createTextNode(newTask));

    //create a delete button 
    let removeButton = document.createElement('button');
    removeButton.appendChild(document.createTextNode('X'));

    newTaskItem.appendChild(removeButton);

    //append it to the current existing list
    // console.log(tasksItems);
    tasksItems.appendChild(newTaskItem);

  });
}) 

//Delete task item
function deleteTask(e){
  e.preventDefault();

  if (e.target.textContent === 'X'){
    e.target.parentElement.remove();
  }
}
