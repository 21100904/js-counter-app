// Get saved count from localStorage, or set to 0 if it doesn't exist
let count = localStorage.getItem('count')
? Number(localStorage.getItem('count'))
: 0;

// Get Element references
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Function to update the count display and save to localStorage
function updateColor() {
    if (count > 0) {
        countDisplay.style.color = 'green';
    } else {
        countDisplay.style.color = 'black';
    }
}

// Initial display update
countDisplay.textContent = count;
updateColor();

// Increment count and update display
incrementBtn.addEventListener('click', () => {
    count++;
    localStorage.setItem('count', count);
    countDisplay.textContent = count;
    updateColor();
});

// Decrement count and update display
decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        localStorage.setItem('count', count);
        countDisplay.textContent = count;
        updateColor();
    }
});

// Reset count and update display
resetBtn.addEventListener('click', () => {
    count = 0;
    localStorage.setItem('count', count);
    countDisplay.textContent = count;
    updateColor();
});