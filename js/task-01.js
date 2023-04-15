const counter = document.querySelectorAll('.item').length;
console.log('Кількість категорій: ', counter);

for (let i = 0; i < counter; i++) {
    const categories = document.querySelectorAll('.item')[i].querySelector('h2').textContent;
    console.log('Категорії: ', categories);
    const categories = document.querySelectorAll('.item')[i].querySelectorAll('li').length;
    console.log('Елементів: ', categories);
}
