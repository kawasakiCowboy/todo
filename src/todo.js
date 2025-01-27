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

    getTitle() {
        return this.title;
    }

    getText() {
        return this.text;
    }

    getDaysTilDeadline() {
        let today = new Date();
        let days = Math.round((this.deadline.getTime() -today.getTime()) / (1000 * 60 * 60 * 24));
        return days;
    }

    getTruncatedText() {
        return this.text.length > 91 ? this.text.substr(0,91) + "..." : this.text;
    }

    getDeadlineMessage() {
        return `Days till deadline: ${this.getDaysTilDeadline()}`;
    }
}



