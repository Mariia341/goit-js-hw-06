const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener(`click`, (event) => {
    counterValue =  counterValue -1;
    const valueEl = document.querySelector('#value')
    valueEl.textContent = counterValue;
}); 

incrementBtn.addEventListener(`click`, (event) => {
    counterValue =  counterValue +1;
    const valueEl = document.querySelector('#value')
    valueEl.textContent = counterValue;
});
