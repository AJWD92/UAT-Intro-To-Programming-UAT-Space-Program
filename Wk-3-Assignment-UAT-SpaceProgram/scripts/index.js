
const checkCreds = () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const idNum = document.getElementById('idNum').value;
    const fullName = `${firstName} ${lastName}`;

    console.log(firstName);
    console.log(lastName);
    console.log(idNum)
    
    if (fullName.length >= 20 || idNum >=1000) {
    document.getElementById('loginStatus').innerHTML = 'Invalid input';
    } else {
    const message = `Full name: ${fullName}\nID#: ${idNum}\nCongrats - you are now logged in - hit enter to go to the next page.`
    ;
    document.getElementById('loginStatus').innerHTML = message;
    alert(message);
    location.href = 'mission_control.html';
    }
    };

// This function sets the text content of a paragraph element with the ID 'test-para' to a specific message
const addParagraph = () => {
    const message = 'Welcome to the program of the future'

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

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the current time variable to 10
    let currTime = 10;

    // Initialize the countdown interval ID variable
    let countdownIntervalId;

    // Function to update the countdown display
    const startCountdown = () => {
        const display = document.getElementById('countdown-display');
        display.textContent = currTime;

        // If the countdown reaches zero, display "Blastoff!" and clear the countdown interval
        if (currTime === 0) {
            const utfRocketCode = 0x1f680; // Unicode for rocket emoji
            const utfCollisionCode = 0x1f4a5; // Unicode for collision emoji

            // Update display text with rocket and collision emojis
            display.textContent = `Blastoff! ${String.fromCodePoint(utfRocketCode)} ${String.fromCodePoint(utfCollisionCode)}`;

            // Clear the countdown interval
            clearInterval(countdownIntervalId);
        } else {
            // Decrement the count by 1
            currTime--;
        }
    };

    // Function to stop the countdown and reset the count variable and button states
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
        // Reset the count to 10
        currTime = 10;

        do {
            // Set the countdown interval to call startCountdown function every 1000ms
            countdownIntervalId = setInterval(startCountdown, 1000);

            // Disable the start button
            startButton.disabled = true;

            const stopButton = document.getElementById('stop-btn');

            // Enable the stop button
            stopButton.disabled = false;

            // Wait until countdown reaches 0 or stop button is clicked
        } while (currTime > 10);
    });

    const stopButton = document.getElementById('stop-btn');

    // Add an onclick event listener to the stop button that stops the countdown and resets the count variable and button states
    stopButton.addEventListener('click', stopCountdown);
});
