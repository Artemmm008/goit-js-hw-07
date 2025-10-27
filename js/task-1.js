const categoriesGroup = document.querySelector("#categories");
const items = categoriesGroup.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const categoryName = item.querySelector("h2").textContent;
  
  const categoryElements = item.querySelectorAll("ul li");
  const elementsCount = categoryElements.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});