// Assign an array of names that computer can choose from
var names = ["Jon Snow", 
"Khaleesi", 
"Tyrion", 
"Ser Jamie", 
"Ser Davos",
"Lady Sanasa",
"Sam Tarley"]

// Assign variables to each counter
var randomNames = [];
var wrongGuess = 0;
var guessesLeft = 12;
var wins = 0;
var losses = 0;

// Create variables that reference the HTML ids to display the text.
var randomNames = document.getElementById("randomNamesText");
var wrongGuess = document.getElementById("wrongGuessesText");
var guessesLeft = document.getElementById("guessesLeftText");
var wins = document.getElementById("winsText");
var losses = document.getElementById("lossesText");

// To load the HTML page elements assign in the above
randomNamesText = "randomNamesText" + randomNames;
wrongGuessText.textContent = "wrongGuessText" + wrongGuess;
guessesleftText.textContent = "guessesLeftText" + guessesLeft;
winsText.textContent = "winsText" + wins;
lossesText.textContent = "lossesText" + losses;

// assign the computer's guess by picking a random name from the array
var computerChoice = names[Math.floor(Math.random() * names.length)];
