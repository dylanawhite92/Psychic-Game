var alphabet =[
    "a", "b", "c", "d", "e", "f", "g", "h", "i", 
    "j", "k", "l", "m", "n", "o", "p", "q", "r", 
    "s", "t", "u", "v", "w", "x", "y", "z"
];

// Starting variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesMade = [];

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

// Generates a new word when the player guesses the right answer
function newWord() {
    guessesLeft = 10;
    guessesMade = [];
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerGuess);
}

// Start a new game, resetting variables to default starting state
function reset() {
     wins = 0;
     losses = 0;
    newWord();
}

reset();

// When a user lifts up on a key, it stores key in userGuess,
// converts letter into lowercase, and checks its value
// against the computerGuess
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();

    if (event.key === computerGuess) {
        wins++;
        alert("Correct!");
        document.getElementById("wins").textContent = "Wins: " + wins;
        newWord();
    }
    else { 
        guessesLeft--;
        document.getElementById("guesses-left").textContent = "Guesses Left: " + guessesLeft;
    }
    if (guessesLeft === 0) {
        losses++;
        document.getElementById("losses").textContent = "Losses: " + losses;
        newWord();
        alert("You Lost! :( Let's try a new letter.");
    }
    if (guessesMade.indexOf(userGuess) === -1) {
        guessesMade.push(userGuess);
        document.getElementById("guesses-made").textContent = "Guesses Made: " + guessesMade;
    }
    
}

document.getElementById("wins").textContent = "Wins: " + wins;
document.getElementById("losses").textContent = "Losses: " + losses;
document.getElementById("guesses-left").textContent = "Guesses Left: " + guessesLeft;
document.getElementById("guesses-made").textContent = "Guesses Made: " + guessesMade;