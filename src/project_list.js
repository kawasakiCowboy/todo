import { Project } from "./project";
import { clearCards } from "./todoFunc";


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
        
        this.currentProject = this.projectList[id - 1];
    }

    changeCurrentProjectToLastActive(currentId) {
        let loopCurrentId = currentId;
        let length = this.projectList.length;
        for (let i = 1; i < length; i++) {
            if (this.projectList[loopCurrentId - i] !== undefined) {
            if (this.projectList[loopCurrentId - i].status === "active") {
                console.log(this.projectList[loopCurrentId - i]);
                this.currentProject = this.projectList[loopCurrentId - i];
                return;
            }
        } else {
            loopCurrentId = length;
            for (let j = 1; j < length; j++) {
                if (this.projectList[loopCurrentId - j].status === "active") {
                    console.log(this.projectList[loopCurrentId - j]);
                    this.currentProject = this.projectList[loopCurrentId - j];
                    return;
                }
            }
        }
        } 
    }

    saveLocalStorage() {
        let  strProjList = JSON.stringify(this);
        localStorage.setItem(
        "projList",
        strProjList
    )
    }

    deleteProject(id) {
        if (this.projectList.filter( item => item.status === 'active').length !== 1) {
            this.projectList[id - 1].status = this.projectList[id - 1].status === "active" ? 'inactive' : "active"
        } else {
            alert("can't delete last project");
        }
    }

    getCurrentProject() {
        return this.currentProject;
    }

    getCurrentProjectToDoById(id) {
        const indexOfToDo = this.getCurrentProject().getToDoList().findIndex( toDo => toDo.id == id);
        return this.getCurrentProject().getToDoList()[indexOfToDo];
    }
}

