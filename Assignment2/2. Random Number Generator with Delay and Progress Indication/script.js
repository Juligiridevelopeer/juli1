// Step 1: Define the delay in milliseconds
let delayInSeconds = 3;
let delayInMillis = delayInSeconds * 1000;

// Step 2: Display countdown messages every second
let countdownInterval = setInterval(() => {
    delayInSeconds--;
    console.log(`Generating random number in ${delayInSeconds} seconds...`);

    if (delayInSeconds === 0) {
        clearInterval(countdownInterval);
        generateRandomNumber();
    }
}, 1000);

// Step 3: Function to generate random number after delay
function generateRandomNumber() {
    setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * 100) + 1; // Generates random number between 1 and 100
        console.log(`Generated random number: ${randomNumber}`);
    }, delayInMillis);
}
