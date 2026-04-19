class Note {
    constructor(title, tag, body) {
        this.id = Date.now();
        this.title = title;
        this.body = body;
        this.tag = tag;
        this.createdAt = new Date().toISOString();
    }
}

export default Note;
