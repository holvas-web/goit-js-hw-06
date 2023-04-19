const textInput = document.querySelector('#validation-input')
console.log(textInput.getAttribute('data-length'))
textInput.addEventListener('blur', event => {
	if (event.target.value.length == textInput.getAttribute('data-length')) {
		textInput.classList.add('valid')
		if (textInput.classList.contains('invalid')) {
			textInput.classList.remove('invalid')
		}
	} else {
		if (textInput.classList.contains('valid')) {
			textInput.classList.remove('valid')
		}
		textInput.classList.add('invalid')
	}
})


// 1. Додати лісенер на подію blur
// 2. Порівнювати значення кількості символів, що ввели і кількість що в дата ленгтх
// 3. Якщо кількість відповідає 6 у цьому випадку, то прибрати клас invalid і додати valid
// 4. Якщо інша кількість, то навпаки - додати инвелид і прибрати велід