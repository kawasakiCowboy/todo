// import "./style.css";

// CLASS todo 
// PROPERTIES - title (string), text (string), deadline (date), 
// dateCreated (date), deadlineChanges (number), status (string)
// METHODS - getData, delete, changeStatus, editText, editDeadline, editTitle
//
//
// CLASS project
// PROPERTIES - title (string), todoList (array)
// METHODS - getTodos, changeTitle, delete, createTodo, getTodoCards
//
//
// CLASS project list
// PROPERTIES - projectList (array)
// METHODS - addProject, getProjects
// 
// 

export class Todo {
    constructor(title,text,deadline) {
        let date = new Date()
        this.title = title;
        this.text = text;
        this.dateCreated = date;
        this.deadline = deadline;
        this.status = "progress";
    }

    getDaysTilDeadline() {
        let days = Math.round((this.deadline.getTime() -this.dateCreated.getTime()) / (1000 * 60 * 60 * 24));
        return days;
    }
}



