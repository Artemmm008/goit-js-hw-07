function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector("span");
const bodyElement = document.querySelector("body");

colorButton.addEventListener("click", () => {
const randomColor = getRandomHexColor();
  
  bodyElement.style.backgroundColor = randomColor;

  colorSpan.textContent = randomColor;
})