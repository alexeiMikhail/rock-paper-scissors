 /* Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection - 
and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
Important note: you want to return the results of this function call, not console.log() them. To test this function console.log the results:

function playRound(playerSelection, computerSelection) {
  // your code here!
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
You have not officially learned how to “loop” over code to repeat function calls… 
if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. 
If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs here if you need to.
Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
Feel free to create more “helper” functions if you think it would be useful. */

    // Start
    // Output game rules
    // Declare variables for total points, user choice, computer choice, winner    
    
    // Computer chooses rock/paper/scissors via RNG (function computerPlay returns "rock", "paper", or "scissors")
    function computerPlay () {
        // Declare computerChoice variable
        let computerChoice;
        // Generate random number between 1 and 3
            // Generate random number between 0 and 1
            let randNum = Math.random();
            // Multiply by 3, add one, change to interger
            randNum = Math.floor(randNum * 3 + 1);
        // Convert number to string "rock", "paper", or "scissors"
        if (randNum === 1) {
            computerChoice = "rock";
        } else if (randNum === 2) {
            computerChoice = "paper";
        } else if (randNum === 3) {
            computerChoice = "scissors";
        } else {
            computerChoice = "error";
        }
        // Return string
        return computerChoice;
    }
    
    // Output computer choice
    console.log(computerPlay())

    // Get user's choice
    function userPlay () {
        // Prompt user for input rock/paper/scissors
        // Check if input is valid
        // Make user variable case-insensitive
    }
            

    // Play one round of Rock, Paper, Scissors
    function playRound(userSelection, computerSelection) {
        // Set total points to 0 for user and computer
        // Call userPlay to get userSelection
        // Call computerPlay to get computerSelection
        // Compare user choice and computer choice
        // Output hand winner
    }
       
    // Play a five-round game of rock-paper-scissors
        // Play one round of rock-paper-scissors
        // Check if computer or user reached 5 points
        // Output point totals
        // When game ends, declare winner, ask to play again