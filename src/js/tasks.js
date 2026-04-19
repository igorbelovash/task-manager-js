import Task from "./task";

const formEl = document.querySelector("#task-form");
const filterTabsEl= document.querySelector("#filter-tabs");
const tasksListEl = document.querySelector("#tasks-list");
const tasksList = JSON.parse(localStorage.getItem('tasks')) ?? [];

renderList(tasksList);

formEl.addEventListener("submit", handleSubmit);
filterTabsEl.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
        return;
    }

    const filterValue = event.target.dataset.filter;
    const result = tasksList.filter(({ done }) => {
        if (filterValue === "all") return true;
        if (filterValue === "done") return done === true;
        if (filterValue === "active") return done === false;
        return false;
    });
    
    renderList(result);
});

tasksListEl.addEventListener("click", (event) => {
    const removeBtn = event.target.classList.contains("btn-danger");
    const doneBtn = event.target.classList.contains("task-check");

    if (removeBtn) {
        handleRemove(event);
        return;
    }
    if (doneBtn) {
        handleDone(event);
        return;
    }
});

function createMarkup(tasks) {
    return tasks.map(({ id, title, priority, done }) =>
        `
        <div class="task-card ${done ? 'done' : ''}" data-id="${id}">
            <div class="task-check">✓</div>
            <div class="task-body">
                <div class="task-title">${title}</div>
                <div class="task-meta"></div>
            </div>
            <span class="priority-badge priority-low">${priority}</span>
            <div class="task-actions">
                <button class="btn btn-sm btn-danger">Видалити</button>
             </div>
        </div>
        `
    ).join("");
}

function handleSubmit(event) {
    event.preventDefault();

    const titleInput = document.querySelector('#task-title').value
    const priorityValue = document.querySelector('#task-priority').value

    const newTask = new Task(titleInput, priorityValue);
    tasksList.push(newTask);
    renderList(tasksList);
    
    localStorage.setItem('tasks', JSON.stringify(tasksList));

    formEl.reset();
}

function renderList(arr) {
    tasksListEl.innerHTML = createMarkup(arr);
}

function handleRemove(event) {
    const taskCard = event.target.closest(".task-card");
    const taskCardId = Number(taskCard.dataset.id);
    const currentTask = tasksList.find(({ id }) => id === taskCardId);
    const index = tasksList.indexOf(currentTask);

    if (index !== -1) {
        tasksList.splice(index, 1);
        renderList(tasksList);
        localStorage.setItem('tasks', JSON.stringify(tasksList));
    }  
}

function handleDone(event) {
    const taskCard = event.target.closest(".task-card");
    const taskCardId = Number(taskCard.dataset.id);
    const currentTask = tasksList.find(({ id }) => id === taskCardId);

    if (currentTask) {
        currentTask.done = !currentTask.done;
        localStorage.setItem('tasks', JSON.stringify(tasksList));
        renderList(tasksList);
    }
}
