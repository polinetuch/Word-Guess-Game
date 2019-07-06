// Assign an array of names that computer can choose from
var names = ["jon", 
"khaleesi", 
"tyrion", 
"jamie", 
"davos",
"sansa",
"samwell"]

// Assign variables to each counter
var guessesLeftNumber = 12;
var correctGuessCount = 0;
var winsNumber = 0;
var lossesNumber = 0;

// a string that stores guessed values, and is the same length as the computer choice
var letterGuessedRight = [];

// a version of letterGuessedRight to display on screen
var formattedLetterGuessedRight = "";
var lettersGuessedWrong = [];

var computerChoice = names[Math.floor(Math.random() * names.length)];

// Create variables that reference the HTML ids to display the text.
var correctGuessText = document.getElementById("correctGuessText");
var wrongGuessText = document.getElementById("wrongGuessText");
var guessesLeftText = document.getElementById("guessesLeftText");
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");

// to display the random computerChoice in blank
function assignedLetterGuessedRightToBlank() {
    letterGuessedRight = [];
    
    var letterCount = computerChoice.length;
    
    // do a loop for the length of letter count in the str
    // during each loop, add a "_" to the value letterGuessedRight
    // 1st letterGuessedRight = "_"
    // 2nd letterGuessedRight = "__"
    // 3rd letterGuessedRight = "___"
    for ( var i = 0; i < computerChoice.length; i++) {
        letterGuessedRight.push("_");
    };
    console.log(letterGuessedRight.length);
}

assignedLetterGuessedRightToBlank(computerChoice);

// format letterGuessedRight to a string that has spaces
function letterGuessedRightFormatAsString() {
    //convert the array to a string
    formattedLetterGuessedRight = letterGuessedRight.join();
    // add spaces
    formattedLetterGuessedRight = formattedLetterGuessedRight.split(',').join(' ');
}

// reset the game - reset counters and increases the value of lossesNumber
function resetGame() {
    computerChoice =names[Math.floor(Math.random() * names.length)];
    console.log(computerChoice);
    guessesLeftNumber = 12;
    assignedLetterGuessedRightToBlank();
    lettersGuessedWrong = [];
}

// reset the screen with updated values
function resetScreen() {
    // reformat the letters gussed string
    letterGuessedRightFormatAsString();

    // To load the HTML page elements assign in the above   
    correctGuessText.textContent = "The Game of Thrones character is " + formattedLetterGuessedRight;
    wrongGuessText.textContent = "Wrong Guesses: " + lettersGuessedWrong.join();
    guessesLeftText.textContent = "Guesses Left: " + guessesLeftNumber;
    winsText.textContent = "Wins: " + winsNumber;
    lossesText.textContent = "Losses: " + lossesNumber;
}

resetScreen();

// grab that is pressed by the user
document.onkeyup = function(event) {
    // when the key is triggerd
    var userGuess = event.key;

    // a boolean variable that says if the user guessed correctly or not
    var userGuessedCorrectLetter = false;

    // loop through each letter in the computer choice word
    for (var i = 0; i < computerChoice.length; i++) {
        // check if the letter matches the user guess
        if (userGuess === computerChoice.charAt(i)) {
            // if it equals, substitute the letter index in letterGuessedRight with the guessed letter
            letterGuessedRight[i] = computerChoice.charAt(i);
            correctGuessCount++;
            // set the boolean variable to true
            userGuessedCorrectLetter = true;
        } 
    }

    // after looping through each letter, check if the user made a correct guess
    if (userGuessedCorrectLetter === false) {
        
        // add the user guess to the lettersGuessedWrong array
        lettersGuessedWrong.push(userGuess);
        guessesLeftNumber = guessesLeftNumber - 1;
    }
    
    // check if the user has won
    if (correctGuessCount === computerChoice.length) {
        winsNumber++;
        alert("Congraluations! You've won! The word was " + computerChoice);
        resetGame();
    }
    // Check if the user has lost based on guesses left
    else if (guessesLeftNumber === 0) {
        lossesNumber++;
        alert("Sorry, try again later!")
        resetGame();
    }

    resetScreen();
} 