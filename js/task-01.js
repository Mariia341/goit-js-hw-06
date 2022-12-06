const categories = document.querySelectorAll(`li.item`);


console.log(`Number of categories:`, categories.length);


categories.forEach(function(newLi) {
    const titleCategories = newLi.querySelector("h2");
    const liOfCategories = newLi.querySelectorAll(`li`);
    console.log(`Category:`, titleCategories.textContent);
    console.log(`Elements:`, liOfCategories.length);

});
















// const counter = parent => { return parent.childElementCount };
// const message = elements => {
//     elements.forEach(element => {
//         const firstElem = element.firstElementChild;
//         const secondElem = firstElem.nextElementSibling
//         console.log(`Category: ${firstElem.textContent}`);
//         console.log(`Elements: ${counter(secondElem)}`);
//     });
// };
// const categories = document.querySelector('#categories');
// const subCategories = categories.querySelectorAll('.item');
// console.log(`Number of categories: ${counter(categories)}`);
// message(subCategories);