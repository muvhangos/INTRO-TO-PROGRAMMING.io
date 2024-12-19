let secret = Math.floor(Math.random() * 20) + 1;
let guess = parseInt(prompt("Please guess the secret number (1-20)"));

while (guess !== secret) {
    guess = parseInt(prompt("Please guess the secret number (1-20)"));

    if (guess === secret) {
        alert("Correct Guess! You guessed the secret number.");
    } else if (guess < secret) {
        alert("Incorrect, too low. Try again.");
    } else if (guess > secret) {
        alert("Incorrect, too high. Try again.");
    }
}