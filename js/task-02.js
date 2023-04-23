const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("ul");
const creatList = content =>{
return content.map((ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});
}
const elements = creatList(ingredients);
ul.append(...elements)
console.log(ul);        

