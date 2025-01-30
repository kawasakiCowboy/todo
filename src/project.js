import { Todo } from "./todo";


export class Project {
    constructor(title, status) {
        this.title = title;
        this.todoList = [];
        this.idCount = 0;
        this.status = status === undefined ? "active" : status;
    }

    createTodo(title,text,deadline,status) {
        let newTodo = new Todo(title,text,deadline,status);
        let newToDoId = this.idCount + 1;
        this.idCount = this.idCount + 1
        newTodo.id = newToDoId;
        this.todoList.push(newTodo);
        return newTodo;
    }

    changeTitle(newTitle) {
        this.title = newTitle;
    }

    getToDoList() {
        return this.todoList;
    }
}