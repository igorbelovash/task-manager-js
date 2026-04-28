const settingsList = JSON.parse(localStorage.getItem('settings')) ?? {};

const username = document.querySelector("#username");
const langSelect = document.querySelector("#lang-select");
const themeToggle = document.querySelector("#theme-toggle");
const sortSelect = document.querySelector("#sort-select");

const saveBtn = document.querySelector("#save-btn");
const clearBtn = document.querySelector("#clear-btn");

saveBtn.addEventListener("click", saveSettings);
themeToggle.addEventListener("click", () => {
    themeToggle.classList.toggle("on");
    saveSettings();
});

clearBtn.addEventListener("click", handleClearData);

loadSettings();

function loadSettings() {
    username.value = settingsList.username ?? "";
    langSelect.value = settingsList.language ?? "";
    themeToggle.classList.toggle('on', settingsList.theme);
    sortSelect.value = settingsList.sort ?? "";
}

function saveSettings() {
    const settings = {
        username: username.value,
        language: langSelect.value,
        theme: themeToggle.classList.contains('on'),
        sort: sortSelect.value,
    }

    localStorage.setItem('settings', JSON.stringify(settings));  
}

function handleClearData() {
    if (confirm('Ти впевнений?')) {
        localStorage.removeItem('settings');
        localStorage.removeItem('notes');
        localStorage.removeItem('tasks');
    }
    return
}