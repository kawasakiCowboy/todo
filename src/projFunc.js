import { clearCards } from "./todoFunc.js";


export function renderProjectButton(name,id, projList) {
    let projectNode = document.querySelector(".not-default-project");
    let addButton = document.querySelector(".add-project");
    let projectDOM = document.querySelector(".sidebar-container");
    let projClone = projectNode.cloneNode(true);
    projClone.addEventListener("click", (e) => {
        projList.changeCurrentProject(e.target.id - 1);
        clearCards();
        projList.currentProject.showToDos(projList);
    } )
    projClone.removeAttribute("style");
    projClone.classList.add("project-button","project");
    projClone.textContent = name;
    projClone.id = id;
    projectDOM.insertBefore(projClone, addButton);
}

export function clearProjectButton() {
    let allButtons = document.querySelectorAll(".project");
    allButtons.forEach((e) => {
        e.remove();
    })
}

export function showProjectsDiv(projList) {
    clearProjectButton();
    console.log(projList);
    for (let project of projList.projectList) {
        renderProjectButton(project.title,project.id, projList);
    }
}






