// Creates an array of words to solve
const options = ["krueger", "pennywise", "amityville horror", "carrie", "leatherface", "chucky", "voorhees", "exorcist",
"dracula", "jack torrance", "pinhead", "nosferatu", "the shining", "ghostface", "candyman", "michael myers",
"hannibal lecter", "xenomorph", "jigsaw", "norman bates", "crypt keeper"];
const wordToSolve = [];
const lettersUsed = [];
let optionChosen = "";
let wins = 0;
let losses = 0;
let guessesRemaining = 15;

function startNewGame() {
  // Randomly chooses a word from the options array.
  optionChosen = options[Math.floor(Math.random() * options.length)];
  clearArray(lettersUsed);
  clearArray(wordToSolve);
  guessesRemaining = 15;

  // Sets "blanks" for each letter in word
  for (let i = 0; i < optionChosen.length; i++) {
    if (optionChosen.charAt(i) !== ' ') {
    wordToSolve[i] = '_';
    }
    else {
    wordToSolve[i] = '&nbsp&nbsp';
    }
  }

  // Displays word to solve and the number of guesses remaining
  document.getElementById("wordToSolve").innerHTML = wordToSolve.join(" ");
  document.getElementById("lettersUsed").innerHTML = "Letters Used: ";
  document.getElementById("numGuessesRemaining").innerHTML = "Number Guesses Remaining: " + guessesRemaining;
}

function clearArray(arrayToClear) {
  while(arrayToClear.length > 0) {
    arrayToClear.pop();
  }
}

startNewGame();

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  //Clear message
  document.getElementById("message").innerHTML = "";

  // Determines which key was pressed.
  let userGuess = event.key;

  // Displays the key the user pressed.
  lettersUsed.push(userGuess);
  document.getElementById("lettersUsed").innerHTML = "Letters Used: " + lettersUsed.join(", ");

  // Check if letter is in word.
  let found = false;
  for (let i = 0; i < optionChosen.length; i++) {
    if (optionChosen[i] === userGuess.toLowerCase()) {
      wordToSolve[i] = userGuess;
      document.getElementById("wordToSolve").innerHTML = wordToSolve.join(" ");
      found = true;
    }
  }

  // Decrement guesses remaining if letter not found
  if (!found) {
    guessesRemaining--;
    document.getElementById("numGuessesRemaining").innerHTML = "Number Guesses Remaining: " + guessesRemaining;
  }

  // Check if user guessed the word
  let numBlanks = wordToSolve.indexOf('_');

  if (numBlanks < 0) {
    wins++;
    document.getElementById("message").innerHTML = "Congratulations! You guessed correctly: " + optionChosen;
    document.getElementById("winScore").innerHTML = "Total Wins: " + wins;
    startNewGame();
  }
  else if (guessesRemaining == 0) {
    losses++;
    document.getElementById("message").innerHTML = "Game Over! Answer was: " + optionChosen;
    document.getElementById("loseScore").innerHTML = "Total Losses: " + losses;
    startNewGame();
  }
};