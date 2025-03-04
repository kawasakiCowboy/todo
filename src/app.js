import { ProjectList } from "./project_list.js";
import { showProjectsDiv } from "./projFunc.js";
import { showToDoDiv } from "./todoFunc.js";
import { showProjectTitle } from "./projFunc.js";
import "./main.css";
import "./sidebar.css";
import "./todo_container.css";
import "./open_card.css";


// INITIALIZE AN APP
export const projList = new ProjectList();
let localProjList = JSON.parse(localStorage.getItem("projList"));
console.log(localProjList);
window.projList = projList;




if (localProjList !== null) {
        let currentProjectId = localProjList.currentProject.id;
    for ( let i = 0; i < localProjList.idCount; i++ ) {
        let projectTitle = localProjList.projectList[i].title;
        let projectStatus = localProjList.projectList[i].status;
        projList.createProject(projectTitle, projectStatus);
        projList.changeCurrentProject(currentProjectId);
        if (localProjList.projectList[i].todoList.length > 0) {
            for (let j = 0; j < localProjList.projectList[i].idCount; j++ ) {
                projList.projectList[i].createTodo(
                    localProjList.projectList[i].todoList[j].title,
                    localProjList.projectList[i].todoList[j].text,
                    new Date(localProjList.projectList[i].todoList[j].deadline),
                    localProjList.projectList[i].todoList[j].status
                )
            }
    }
}

} else { 
    projList.createProject("default project");
}



// projList.createProject("default project");
showProjectsDiv(projList);
showProjectTitle(projList);
showToDoDiv(projList);


// LISTENER ON "ADD A PROJECT"
const addProjButton = document.querySelector(".add-project");
addProjButton.addEventListener("click", () => {
    let name = prompt("name");
    projList.createProject(name);
    showProjectTitle(projList)
    showProjectsDiv(projList);
    projList.saveLocalStorage();
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
    projList.saveLocalStorage();
    okButton.addEventListener("click", () => {
        projList.currentProject.changeTitle(titleInput.value);
        title.textContent = titleInput.value;
        titleInput.replaceWith(title);
        okButton.replaceWith(editProject);
        showProjectsDiv(projList);
        projList.saveLocalStorage();
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
    let text = addCard.querySelector("#text");
    let deadline = addCard.querySelector(".deadline-picker");
    let deleteButton = addCard.querySelector(".title-bar-delete-add");
    projList.saveLocalStorage();
    addCard.addEventListener("submit", () => {
        let deadlineFormat = new Date(deadline.value);
        projList.currentProject.createTodo(title.value,text.value,deadlineFormat,"progress");
        showToDoDiv(projList);
        addCard.remove();
        projList.saveLocalStorage();
    })
    deleteButton.addEventListener("click", () => {
        addCard.remove();
        projList.saveLocalStorage();
    })
    
})

// LISTENER ON DELETE PROJECT
const deleteProjectButton = document.querySelector(".delete-project");
deleteProjectButton.addEventListener("click", () => {
    let currentProjectId = projList.currentProject.id;
    projList.deleteProject(currentProjectId);
    projList.changeCurrentProjectToLastActive(currentProjectId);
    showProjectsDiv(projList);
    showProjectTitle(projList);
    showToDoDiv(projList);
    projList.saveLocalStorage();
})

