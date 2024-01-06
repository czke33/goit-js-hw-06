function getRandomHexColor() {
  let randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  console.log(randomColor);
  return randomColor;
}

const bodyColor = document.querySelector("body");
const button = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");

const changeColor = () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = getRandomHexColor();
};

window.onload = (event) => changeColor();
button.addEventListener("click", changeColor);
