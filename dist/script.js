

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {


    const addButton = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput")
    addButton.addEventListener("click", addBtnClick);

    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });
}

function addBtnClick() {
    const taskInput = document.getElementById("taskInput");
    const newTaskText = taskInput.value;

    if (newTaskText.trim() === "") {
        taskInput.value = "";
        taskInput.focus();
        return;
    }

   addTask(newTaskText);

   taskInput.value = "";

   taskInput.focus();
}

function addTask(taskText) {
    const newListItem = document.createElement("li");
    newListItem.innerHTML = `<span class="task-text">${taskText}</span><button class="done-btn">&#10006;</button>`;

    const taskList = document.getElementById("taskList");
    taskList.appendChild(newListItem);

    const doneButton = newListItem.querySelector(".done-btn");
    doneButton.addEventListener("click", function() {
        taskList.removeChild(newListItem);
    })
}

