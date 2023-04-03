
// This function sets the text content of a paragraph element with the ID 'test-para' to a specific message
const addParagraph = () => {
    const message = 'Test of the document write function'

    // Get the paragraph element by its ID and set its text content to the message
    document.getElementById('test-para').textContent = message;
}

// This function prompts the user to input their name and displays a welcome message using the input
const displayInput = () => {

      // Prompt the user to input their name and store the input in a variable
    let userInput = prompt('Please enter your name');
    
    // Display a welcome message to the user using their input
    alert(`Hello ${userInput} Welcome to the UAT Space Program!!!`);
}

// used to add an event listener that will listen for the event DOMContentLoaded to fire off 'under the hood' of JavaScript
document.addEventListener('DOMContentLoaded', () => {

    // Initialize currTime variable to 10
    let currTime = 10;

    // Initialize countdownIntervalId variable to hold the ID of the countdown interval
    let countdownIntervalId;

    // This function updates the countdown display on the web page
    const startCountdown = () => {
        const display = document.getElementById('countdown-display');
        display.textContent = currTime;
        
        // If the countdown reaches zero, display "Blastoff!" and clear the countdown interval
        if (currTime === 0) {

            // Unicode for rocket emoji
            const utfRocketCode = 0x1f680; 

            // Unicode for collision emoji
            const utfCollisionCode = 0x1f4a5;

            display.textContent = `Blastoff! ${String.fromCodePoint(utfRocketCode)} ${String.fromCodePoint(utfCollisionCode)}`;
            clearInterval(countdownIntervalId);
        } else {
            // Decrement count by 1
            currTime--;
        }
    };
    
    // This function stops the countdown and resets the count variable and button states
    const stopCountdown = () => {

        // Clear the countdown interval
        clearInterval(countdownIntervalId);

        // Reset the count to 10
        currTime = 10;
    
        const display = document.getElementById('countdown-display');
        display.textContent = currTime;
    
        const stopButton = document.getElementById('stop-btn');

        // Disable the stop button
        stopButton.disabled = true;
    
        const startButton = document.getElementById('start-btn');
        // Enable the start button
        startButton.disabled = false;

        // Set the onclick event listener for the start button to startCountdown function
        startButton.onclick = startCountdown;
    };
    
    const startButton = document.getElementById('start-btn');

    // Add an onclick event listener to the start button that starts the countdown and disables the button
    startButton.addEventListener('click', () => {

        // reset the count to 10
        currTime = 10; 

        // Set the countdown interval to call startCountdown function every 1000ms
        countdownIntervalId = setInterval(startCountdown, 1000);

        // Disable the start button
        startButton.disabled = true;

        const stopButton = document.getElementById('stop-btn');

        // Enable the stop button
        stopButton.disabled = false;
    });
    
    const stopButton = document.getElementById('stop-btn');

    // Add an onclick event listener to the stop button that stops the countdown and resets the count variable and button states
    stopButton.addEventListener('click', stopCountdown);

});