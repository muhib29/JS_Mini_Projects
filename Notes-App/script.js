console.log("Running");

const notesContainer = document.querySelector(".notes-container");
const button = document.querySelector(".btn");

// Function to load notes from localStorage and display them
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
    
    // Reattach event listeners to each existing lord-icon for deletion
    const icons = document.querySelectorAll(".img");
    icons.forEach((icon) => {
        icon.addEventListener("click", deletePara);
    });
}
showNotes();

function UpdateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Function to add a new note
button.addEventListener("click", () => {
    let p = document.createElement("p");
    let loreIcon = document.createElement("lord-icon");
    
    p.className = "input-box";
    p.setAttribute("contenteditable", "true");
    p.innerHTML = "Type here..."
    loreIcon.className = "img";
    loreIcon.src = "https://cdn.lordicon.com/drxwpfop.json";
    loreIcon.setAttribute("trigger", "hover");

    notesContainer.appendChild(p).appendChild(loreIcon);

    // Attach the delete event listener to the new lord-icon
    loreIcon.addEventListener("click", deletePara);

    // Attach the keyup event listener to the new paragraph
    p.addEventListener("keyup", UpdateStorage);

    UpdateStorage();
});

// Function to delete a note
function deletePara(e) {
    if (e.target.tagName === "LORD-ICON") {
        e.target.parentElement.remove();
        UpdateStorage();
    }
}

// Prevent Enter key from creating a new paragraph
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
});
