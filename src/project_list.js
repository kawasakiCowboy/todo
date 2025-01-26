import { Project } from "./project";
import { renderProjectButton, clearProjectButton } from "./projFunc";
import { clearCards } from "./todoFunc";
import { projList } from "./app";

export class ProjectList {
    constructor() {
        this.projectList = [];
        this.currentProject = undefined;
        this.idCount = 0;
    }

    createProject(name,status) {
        let newProject = new Project(name,status);
        this.idCount = this.idCount + 1;
        newProject.id = this.idCount;
        this.projectList.push(newProject);
        this.currentProject = newProject;
        clearCards();
    }

    changeCurrentProject(id) {
        this.currentProject = this.projectList[id];
    }

    saveLocalStorage() {
        let  strProjList = JSON.stringify(this);
        localStorage.setItem(
        "projList",
        strProjList
    )
    }

    changeStatus(id) {
        this.projectList[id - 1].status = this.projectList[id - 1].status === "active" ? 'inactive' : "active"
    }
}

