function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const backgroundColor = document.querySelector('body')
const changeColorBtn = document.querySelector('.change-color')
const textColor = document.querySelector('.color')


changeColorBtn.addEventListener('click', e => {
  let color = getRandomHexColor();
  backgroundColor.style.backgroundColor = color;
  textColor.textContent = color;
})
