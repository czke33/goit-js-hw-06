const categoriesList = document.querySelector("#categories");

const categoryItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((category, element) => {
  const categoryTitle = category.querySelector("h2").textContent;

  const categoryElement = category.querySelectorAll("li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElement.length}`);
});
