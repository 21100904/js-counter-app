let count = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

incrementBtn.addEventListener('click', () => {
    count = count + 1;
    countDisplay.textContent = count;
});

decrementBtn.addEventListener('click', () => {
    count = count - 1;
    countDisplay.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
});