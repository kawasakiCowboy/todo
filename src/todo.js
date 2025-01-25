export class Todo {
    constructor(title,text,deadline) {
        let date = new Date()
        this.title = title;
        this.text = text;
        this.dateCreated = date;
        this.deadline = deadline;
        this.id = undefined;
        this.status = "progress";
    }

    getDaysTilDeadline() {
        let days = Math.round((this.deadline.getTime() -this.dateCreated.getTime()) / (1000 * 60 * 60 * 24));
        return days;
    }
}



