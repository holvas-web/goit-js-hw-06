function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButton = document.querySelector('button.change-color');
const body = document.querySelector('body');
const colorValue = document.querySelector('span.color');


changeButton.addEventListener('click', e => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
})



// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const backgroundColor = document.querySelector('body');
// const changeColorBtn = document.querySelector('.change-color');
// const textColor = document.querySelector('.color');

// changeColorBtn.addEventListener('click', changeColor);

// function changeColor() {
//   textColor.textContent = getRandomHexColor();
//   backgroundColor.style.background = `${getRandomHexColor()}`;
// }
// console.log(getRandomHexColor());
