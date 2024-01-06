const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
const anonymousValue = "Anonymous";

inputName.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    outputName.textContent = event.currentTarget.value;
  } else {
    outputName.textContent = anonymousValue;
  }
  console.log(outputName);
});
