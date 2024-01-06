const inputFont = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = "40px";

const makeFontSizeEditor = (event) => {
  text.style.fontSize = event.currentTarget.value + "px";
};
inputFont.addEventListener("input", makeFontSizeEditor);
