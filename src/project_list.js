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

    createProject(name) {
        let newProject = new Project(name);
        this.idCount = this.idCount + 1;
        newProject.id = this.idCount;
        this.projectList.push(newProject);
        this.currentProject = newProject;
        clearCards();
    }

    changeCurrentProject(id) {
        this.currentProject = this.projectList[id];
    }
}

