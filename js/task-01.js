const categories = document.querySelectorAll('.item')

console.log(`Number of categories: ${categories.length}`);

categories.forEach(items => {
    console.log(`Category: ${items.firstElementChild.textContent}`)
    console.log(`Elements: ${items.lastElementChild.querySelectorAll('li').length}`)
})
