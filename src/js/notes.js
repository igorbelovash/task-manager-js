import Note from "./note";

const formEl = document.querySelector("#note-form");
const searchInputEl= document.querySelector("#search-input");
const notesListEl = document.querySelector("#notes-grid");
const notesList = JSON.parse(localStorage.getItem('notes')) ?? [];

renderList(notesList);

formEl.addEventListener("submit", handleSubmit);
searchInputEl.addEventListener("input", (event) => {

    const inputValue = event.target.value.toLowerCase();
    const result = notesList.filter(({ title }) => title.toLowerCase().includes(inputValue));
    
    renderList(result);
});

notesListEl.addEventListener("click", (event) => {
    const removeBtn = event.target.classList.contains("btn-danger");

    if (removeBtn) {
        handleRemove(event);
        return;
    }
});

function createMarkup(notes) {
    return notes.map(({ id, title, body, tag, createdAt }) =>
        `
        <div class="note-card" data-id="${id}">
            <div class="note-card-header">
                <div class="note-title">${title}</div>
                <button class="btn btn-sm btn-danger">✕</button>
            </div>
            <div class="note-body">${body}</div>
            <div class="note-footer">
                <span class="note-tag">${tag}</span>
                <span class="note-date">${new Date(createdAt).toLocaleDateString()}</span>
            </div>
        </div>
        `
    ).join("");
}

function handleSubmit(event) {
    event.preventDefault();

    const titleInput = document.querySelector('#note-title').value;
    const tagInput = document.querySelector('#note-tag').value;
    const textarea = document.querySelector('#note-body').value;

    const newNote = new Note(titleInput, tagInput, textarea);
    notesList.push(newNote);
    renderList(notesList);
    
    localStorage.setItem('notes', JSON.stringify(notesList));

    formEl.reset();
}

function renderList(arr) {
    notesListEl.innerHTML = createMarkup(arr);
}

function handleRemove(event) {
    const noteCard = event.target.closest(".note-card");
    const noteCardId = Number(noteCard.dataset.id);
    const currentNote = notesList.find(({ id }) => id === noteCardId);
    const index = notesList.indexOf(currentNote);

    if (index !== -1) {
        notesList.splice(index, 1);
        renderList(notesList);
        localStorage.setItem('notes', JSON.stringify(notesList));
    }  
}

