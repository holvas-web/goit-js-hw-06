const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('ul');
const array = [];
for (let i = 0; i < ingredients.length; i++) {
    const li = document.createElement("li");
    li.classList.add('item');
    li.textContent = ingredients[i];
    array.push(li);

}
ul.append(...array);