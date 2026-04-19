class Task {
    constructor(title, priority) {
        this.id = Date.now();
        this.title = title;
        this.priority = priority;
        this.done = false;  
        this.createdAt = new Date().toISOString();
    }

    complete() {
        this.done = true;
    }
}

export default Task;


