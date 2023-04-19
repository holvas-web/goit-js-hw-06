const inputChange = document.querySelector('input#font-size-control');
const abracadabra = document.querySelector('span#text');

inputChange.addEventListener('change', e => {
    abracadabra.style.fontSize = `${e.target.value}px`
});

// const inpputRrange = document.querySelector('#font-size-control');
// const spanText = document.querySelector('#text');
// spanText.style.fontSize = '${Number(inputRange.value)}px';
// console.log(spanText.style);