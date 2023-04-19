let counterValue = 0
const text = document.querySelector('[data-action="increment"]');
text.addEventListener("focus", () => {
    counterValue = counterValue += 1
});
console.log(counterValue)

// let counterValue = 0

// const displayCounter = document.querySelector('#value')
// const buttonMinus = document.querySelector('button[data-action="decrement"]')
// const buttonPlus = document.querySelector('button[data-action="increment"]')

// buttonMinus.addEventListener('click', () => {
// 	counterValue--
// 	displayCounter.textContent = counterValue
// })

// buttonPlus.addEventListener('click', () => {
// 	counterValue++
// 	displayCounter.textContent = counterValue
// })