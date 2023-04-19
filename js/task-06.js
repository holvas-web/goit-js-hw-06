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


// const input = document.querySelector('#validation-input');
// input.addEventListener("blur", onValidInput);

// function onValidInput() {
//     if (input.value.length === Number(input.dataset.length)) {
//         input.classList.add('valid');
//     } else {
//         input.classList.add('invalid');
//     }
//     console.log(currentTarget.value.length);
//     console.log(input.dataset.length);
// }