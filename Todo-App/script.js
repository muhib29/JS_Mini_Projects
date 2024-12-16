
console.log("Script loaded");

const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
function addText(event) {
    event.preventDefault();  // Prevent form submission

    if (todoInput.value === '') {
        alert("Please enter a task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = todoInput.value;
        todoList.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        todoInput.value = '';  // Clear the input field
        saveToLS ()
        let button = document.createElement("button") 
        button.innerHTML = "Edit";
        li.appendChild(button);
    }
}

todoList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveToLS();
    } else if (e.target.tagName === "SPAN" ) {
        e.target.parentElement.remove();
        saveToLS();
    } else if (e.target.tagName === "BUTTON") {
        editTask(e.target);
    }
});
function saveToLS() {
    localStorage.setItem("list", todoList.innerHTML);
}

function showTask() {
    todoList.innerHTML = localStorage.getItem("list") || '';
}

showTask();

// function showTask (){
//     todoList.innerHTML = localStorage.getItem("list");
// }
// showTask()
