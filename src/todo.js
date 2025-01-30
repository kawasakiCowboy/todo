export class Todo {
    constructor(title,text,deadline,status) {
        let date = new Date()
        this.title = title;
        this.text = text;
        this.dateCreated = date;
        this.deadline = deadline;
        this.id = undefined;
        this.status = status;
    }

    getTitle() {
        return this.title;
    }

    editTitle(title) {
        this.title = title;
    }

    getText() {
        return this.text;
    }

    editText(text) {
        this.text = text;
    }

    getDeadline() {
        return this.deadline;
    }

    editDeadline(deadline) {
        this.deadline = deadline;
    }

    getStatus() {
        return this.status;
    }

    editStatus(status) {
        this.status = status;
    }

    deleteTodo() {
        this.status = "deleted";
    }

    getDaysTilDeadline() {
        let today = new Date();
        let days = Math.round((this.deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        return days;
    }

    getTruncatedText() {
        return this.text.length > 91 ? this.text.substr(0,91) + "..." : this.text;
    }

    getDeadlineMessage() {
        return `Days till deadline: ${this.getDaysTilDeadline()}`;
    }
}



