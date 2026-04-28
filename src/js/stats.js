const statTotal = document.querySelector("#stat-total");
const statDone = document.querySelector("#stat-done");
const statActive = document.querySelector("#stat-active");
const statPercent = document.querySelector("#stat-percent");

const statNotes = document.querySelector("#stat-notes");

const tasksList = JSON.parse(localStorage.getItem('tasks')) ?? [];
const notesList = JSON.parse(localStorage.getItem('notes')) ?? [];

const doneTasks = tasksList.filter(item => item.done).length;

calcTotalTasks(tasksList);
calcDoneTasks(tasksList);
calcActiveTasks(tasksList);
percentDoneTasks(tasksList);
progressLabel(tasksList);
overallProgressLabel(tasksList);
calcTotalNotes(notesList);
uniqueTags(notesList);

function calcTotalTasks(arr) {
    statTotal.textContent = arr.length;
}

function calcDoneTasks() {
    statDone.textContent = doneTasks;
}

function calcActiveTasks(arr) {
    statActive.textContent = arr.length - doneTasks;
}

function percentDoneTasks(arr) {
    if (arr.length === 0) {
        statPercent.textContent = 0;
        return;
    }

    const result = (doneTasks / arr.length) * 100
    statPercent.textContent = result;
    return result;
}

function progressLabel(arr) {
    const result = arr.reduce((acc, item) => {
        acc[item.priority] += 1;
        return acc;
    }, { low: 0, medium: 0, high: 0 });

    Object.entries(result).forEach(([key, value]) => {
        document.querySelector(`#bar-${key}`).style.width = `${(value / arr.length) * 100}%`;
        document.querySelector(`#label-${key}`).textContent = value;
    })
}

function overallProgressLabel(arr) {
    document.querySelector("#bar-progress").style.width = `${percentDoneTasks(arr)}%`;
    document.querySelector("#label-progress").textContent = doneTasks;
}

function calcTotalNotes(arr) {
    statNotes.textContent = arr.length;
}

function uniqueTags(arr) {
    const result = new Set(arr.map(item => item.tag)).size;
    document.querySelector("#stat-tags").textContent = result;
}