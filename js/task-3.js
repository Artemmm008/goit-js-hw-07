const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const defaultName = "Anonymous";

nameInput.addEventListener("input", (event) => {
    const textTrim = event.currentTarget.value.trim();

    if (textTrim === "") {
        nameOutput.textContent = defaultName;
    }

    else {
        nameOutput.textContent = textTrim;
    }
});