const textInput = document.querySelector("#validation-input");

const counter = (event) => {
  let caracterNum = event.currentTarget.value;
  if (caracterNum.length === Number(textInput.dataset.length)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
  console.log(event.currentTarget);
};
textInput.addEventListener("blur", counter);
