const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

let randomNumber = Math.floor(Math.random() * 100) + 1;

const rl = readline.createInterface({
    input,
    output
});

async function readValue(msg) {
    const input = await rl.question(msg);
    return Number(input);
}

function performGame(num) {
    if (num === null || Number.isNaN(num)) {
        console.log("Please enter a number to start the game");
        return;
    }

    if (num > randomNumber)
    {
        console.log("Too high");
        console.log(`the Number was ${randomNumber}`);
    }
    else if (num < randomNumber)
    {
        console.log("Too low");
        console.log(`the Number was ${randomNumber}`);

    }
    else
        console.log("Correct!");
}

async function startGame() {
    userGuess = await readValue("Try to guess the hidden number: ");
    performGame(userGuess);

    rl.close();
}

startGame();
