const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const contaitnerElement = document.querySelector("#ingredients");
const ulElement = document.createElement("li");
ulElement.classList.add("item");
contaitnerElement.append(ulElement);

for (let i = 0; i < ingredients.length; i++) {
  let listElement = document.createElement("li");
  listElement.textContent = ingredients[i];
  ulElement.append(listElement);
}

console.log(contaitnerElement);
