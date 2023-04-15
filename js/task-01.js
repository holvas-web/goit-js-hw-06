const categories = document.querySelectorAll('.item')

console.log(`Кількість категорій: ${categories.length}`);

categories.forEach(items => {
    console.log(`Категорій: ${items.firstElementChild.textContent}`)
    console.log(`Елементів: ${items.lastElementChild.querySelectorAll('li').length}`)
})

// const counter = document.querySelectorAll('.item').length;
// console.log('Кількість категорій: ', counter);

// for (let i = 0; i < counter; i++) {
//     const categories = document.querySelectorAll('.item')[i].querySelector('h2').textContent;
//     console.log('Категорії: ', categories);
//     const categories = document.querySelectorAll('.item')[i].querySelectorAll('li').length;
//     console.log('Елементів: ', categories);
// }
