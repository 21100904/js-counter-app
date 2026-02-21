let count = localStorage.getItem('count');
count = count ? Number(count) 
: 0;


const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

function updateColor() {
    if (count > 0) {
        countDisplay.style.color = 'green';
    } else {
        countDisplay.style.color = 'black';
    }}

incrementBtn.addEventListener('click', () => {
    count = count ++;
    localStorage.setItem('count', count);
    countDisplay.textContent = count;
    updateColor();
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        localStorage.setItem('count', count);
    countDisplay.textContent = count;
    updateColor();
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    localStorage.setItem('count', count);
    countDisplay.textContent = count;
    updateColor();
});