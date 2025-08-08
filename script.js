// script.js

// Wait until the DOM is fully loaded before trying to access elements
document.addEventListener('DOMContentLoaded', () => {
    // Get a reference to the button element by its ID
    const changeTextBtn = document.getElementById('changeTextBtn');
    // Get a reference to the paragraph element by its ID
    const dynamicText = document.getElementById('dynamicText');

    // Variable to keep track of the click count
    let clickCount = 0;

    // Add an event listener to the button
    changeTextBtn.addEventListener('click', () => {
        // Increment the click count
        clickCount++;

        // Change the text content of the paragraph based on the click count
        if (clickCount === 1) {
            dynamicText.textContent = 'You clicked the button for the first time! 🎉';
        } else if (clickCount === 2) {
            dynamicText.textContent = 'That\'s two clicks! Keep going! 🚀';
        } else if (clickCount === 3) {
            dynamicText.textContent = 'Three times a charm! This is fun! 😄';
        } else {
            dynamicText.textContent = `You've clicked ${clickCount} times! Amazing! ✨`;
        }

        // Optionally, change button text after a few clicks
        if (clickCount >= 5) {
            changeTextBtn.textContent = 'Clicked enough?';
        }
    });
});
