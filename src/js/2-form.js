const FEEDBACK_FORM_LS_KEY = "feedback-form-state";
const feedbackData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_LS_KEY)) ?? {};

const formData = {
    email: feedbackData?.email || "",
    message: feedbackData?.message || ""
};

const formEl = document.querySelector(".feedback-form");

if (feedbackData) {
    formEl.elements.email.value = formData.email;
    formEl.elements.message.value = formData.message;
}

formEl.addEventListener("input", handleInput);
formEl.addEventListener("submit", handleSubmit);

function handleInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(FEEDBACK_FORM_LS_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
    event.preventDefault();
    if (!event.target.email.value || !event.target.message.value) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    localStorage.removeItem(FEEDBACK_FORM_LS_KEY);

    formData.email = "";
    formData.message = "";

    formEl.reset();
}