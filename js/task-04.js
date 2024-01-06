const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const spanBtn = document.querySelector("#value");
let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue = counterValue - 1;
  spanBtn.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue = counterValue + 1;
  spanBtn.textContent = counterValue;
});
