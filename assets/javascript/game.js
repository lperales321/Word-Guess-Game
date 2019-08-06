// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
const computerChoices = ["r", "p", "s"];
let userScore = 0;
let computerScore = 0;
let tieScore = 0;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
  let userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  //Math.random chooses number between 0 and 1
  let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // Alerts the key the user pressed (userGuess).
  alert("User guess: " + userGuess);

  // Alerts the Computer's guess.
  alert("Computer guess: " + computerGuess);

  if (userGuess === 'r' || userGuess === 's' || userGuess === 'p') {
    if (userGuess === computerGuess) {
      tieScore++;
    }
    else if ((userGuess === 'r' && computerGuess === 's') || 
        (userGuess === 'p' && computerGuess === 'r') || 
        (userGuess === 's' && computerGuess === 'p')) {
      userScore++;
    }
    else {
      computerScore++;
    }
  };

  document.getElementById("userScore").innerHTML = "User Score: " + userScore;
  document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
  document.getElementById("tieScore").innerHTML = "Tie: " + tieScore;

};