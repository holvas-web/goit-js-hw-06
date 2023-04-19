const textInput = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

textInput.addEventListener('input', event => {
	output.textContent = event.target.value

	if (event.target.value === '') {
		output.textContent = 'Anonymous'
	}
})

// const nameInputRef = document.querySelector('#name-input');
// const nameOutputRef = document.querySelector('#name-input');

// const onInput = ({ currentTarget }) => {
//     nameOutputRef.textContent = currentTarget.value;
//     if (nameOutputRef.textContent === '') {
//         nameOutputRef.textContent = 'Anonymous'
//     }
// };
// nameInputRef.addEventListener("input", onInput);