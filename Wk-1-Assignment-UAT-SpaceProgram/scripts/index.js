const addParagraph = () => {
    const message = 'Test of the document write function'

    document.getElementById('test-para-2').textContent = message;
}

const displayInput = () => {
    let userInput = prompt('Please enter your name');

    alert(`Hello ${userInput} Welcome to the UAT Space Program!!!`);
}

document.addEventListener('DOMContentLoaded', () => {

    let count = 10;
    let countdownIntervalId;

    const startCountdown = () => {
        const display = document.getElementById('countdown-display');
        count--;

        if (count >= 0) {

            display.textContent = count;
            if (count === 0) {
            const utfCode = 0x1f4a5;
            display.textContent = `Blastoff! ${String.fromCodePoint(utfCode)}`;
            }
        }
    };

    const stopCountdown = () => {
        clearInterval(countdownIntervalId);
        count = 10;

        const display = document.getElementById('countdown-display');
        display.textContent = count;

        const stopButton = document.getElementById('stop-btn');
        stopButton.disabled = true;

        const startButton = document.getElementById('start-btn');
        startButton.disabled = false;
        startButton.onclick = startCountdown;
    };


    const startButton = document.getElementById('start-btn');
    console.log(startButton);
    startButton.addEventListener('click', () => {
        countdownIntervalId = setInterval(startCountdown, 1000);
        startButton.disabled = true;
        const stopButton = document.getElementById('stop-btn');
        stopButton.disabled = false;
    });

    const stopButton = document.getElementById('stop-btn');
    console.log(stopButton)
    stopButton.addEventListener('click', stopCountdown);

});