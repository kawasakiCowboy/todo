import { Todo } from "./todo";
import { renderTodo } from "./todoFunc";


export class Project {
    constructor(title) {
        this.title = title;
        this.todoList = [];
    }

    createTodo(title,text,deadline) {
        let newTodo = new Todo(title,text,deadline);
        this.todoList.push(newTodo);
        return newTodo;
    }

    showToDos(projList) {
        for (let toDo of projList.currentProject.todoList) {
            renderTodo(toDo.title,toDo.text,toDo.getDaysTilDeadline());
        }
    }

    changeTitle(newTitle) {
        this.title = newTitle;
    }
}