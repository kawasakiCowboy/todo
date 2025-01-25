import { Todo } from "./todo";


export class Project {
    constructor(title) {
        this.title = title;
        this.todoList = [];
        this.idCount = 0;
    }

    createTodo(title,text,deadline) {
        let newTodo = new Todo(title,text,deadline);
        let newToDoId = this.idCount + 1;
        this.idCount = this.idCount + 1
        newTodo.id = newToDoId;
        this.todoList.push(newTodo);
        return newTodo;
    }

    changeTitle(newTitle) {
        this.title = newTitle;
    }
}