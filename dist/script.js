

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {


    const addButton = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput")
    addButton.addEventListener("click", addBtnClick);


    // Adds tasks to the list whent he enter key is clicked  
    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {        // Get the add button function when enter is clicked
            addBtnClick();  
        }
    });
}


// Function for when Add or Enter is clicked
function addBtnClick() {
    const taskInput = document.getElementById("taskInput");
    const newTaskText = taskInput.value;

    // Check that the box is not empty
    if (newTaskText.trim() === "") {
        taskInput.value = "";   
        taskInput.focus();
        return;
    }

   addTask(newTaskText);     // Add the task to the list

   taskInput.value = "";     // Clear the input

   taskInput.focus();       // Put the focus back into the entry box
}

function addTask(taskText) {
    const newListItem = document.createElement("li");
    newListItem.innerHTML = `<span class="task-text">${taskText}</span><button class="done-btn">&#10006;</button>`;

    const taskList = document.getElementById("taskList");      // Get the task
    taskList.appendChild(newListItem);      // Add the task to the list


    // Listener for when delete is clicked
    const doneButton = newListItem.querySelector(".done-btn");
    doneButton.addEventListener("click", function() {
        taskList.removeChild(newListItem);
    })
}

