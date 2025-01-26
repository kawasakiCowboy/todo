import { showToDoDiv } from "./todoFunc.js";


export function renderProjectButton(name,id, projList) {
    let projectNode = document.querySelector(".not-default-project");
    let addButton = document.querySelector(".add-project");
    let projectDOM = document.querySelector(".sidebar-container");
    let projClone = projectNode.cloneNode(true);
    projClone.addEventListener("click", (e) => {
        projList.changeCurrentProject(e.target.id - 1);
        showToDoDiv(projList);
        showProjectTitle(projList);
        projList.saveLocalStorage();
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
    for (let project of projList.projectList) {
        if (project.status === "active") {
        renderProjectButton(project.title,project.id, projList);
    }
}
}

export function showProjectTitle(projList) {
    let title = document.querySelector(".project-title");
    title.textContent = projList.currentProject.title;
}





