import { ProjectList } from "./project_list.js";
import { showProjectsDiv } from "./projFunc.js";
import { clearCards } from "./todoFunc.js";
import { showToDoDiv } from "./todoFunc.js";
import "./main.css";
import "./sidebar.css";
import "./todo_container.css";
import "./open_card.css";


// INITIALIZE AN APP
export const projList = new ProjectList();
projList.createProject("default project");
showProjectsDiv(projList);
window.projList = projList;


// LISTENER ON "ADD A PROJECT"
const addProjButton = document.querySelector(".add-project");
addProjButton.addEventListener("click", () => {
    let name = prompt("name");
    projList.createProject(name);
    showProjectsDiv(projList);
})

// LISTENERS ON TITLE
const editProject = document.querySelector(".edit-project");
editProject.addEventListener("click", () => {
    let title = document.querySelector(".project-title");
    let titleInput = document.createElement("input");
    titleInput.setAttribute("class", "project-title");
    title.replaceWith(titleInput);
    titleInput.focus();
    let okButton = document.createElement("button");
    okButton.setAttribute("class", "title-ok-button");
    okButton.textContent = "Ok";
    editProject.replaceWith(okButton);
    okButton.addEventListener("click", () => {
        projList.currentProject.changeTitle(titleInput.value);
        title.textContent = titleInput.value;
        titleInput.replaceWith(title);
        okButton.replaceWith(editProject);
        showProjectsDiv(projList);
    })
})

// LISTENER ON "ADD A TODO"
const addTodoButton = document.querySelector(".card-add");
addTodoButton.addEventListener("click", () => {
    let defaultCard = document.querySelector("#card-add");
    let addCard = defaultCard.cloneNode(true);
    addCard.removeAttribute("style");
    let todoContainer = document.querySelector(".todo-container");
    todoContainer.insertBefore(addCard, defaultCard);
    let title = addCard.querySelector("#title-add");
    let createButton = addCard.querySelector("button");
    let text = addCard.querySelector("#text");
    let deadline = addCard.querySelector(".deadline-picker");
    let deleteButton = addCard.querySelector(".title-bar-delete-add");
    createButton.addEventListener("click", () => {
        let deadlineFormat = new Date(deadline.value);
        projList.currentProject.createTodo(title.value,text.value,deadlineFormat);
        showToDoDiv(projList);
        addCard.remove();
    })
    deleteButton.addEventListener("click", () => {
        addCard.remove();
    })
    
})

