    // Start
    alert(`Welcome to hell.
    The rules are simple. 
    You will play rock, paper, scissors with my computer minion.
    If you reach 5 points before the computer does, then congratulations, you escape with your life.
    If the computer wins, then you will be trapped in an infinite rock-paper-scissors loop FOREVER!!!!!
    Muahahahahahahahah!!!!!!!`)
    // Output game rules  
    

    



    console.log(playRound());            

    // Play one round of Rock, Paper, Scissors
    function playRound(userSelection, computerSelection) {
        // Get user's choice
        function userPlay () {
            // declare userchoice variables
            let userChoice;
            // Prompt user for input rock/paper/scissors
            userChoice = prompt("Would you like to play rock, paper, or scissors?");
            // Make user variable lowercase
            userChoice = userChoice.toLowerCase();
            // Check if input is valid, and create 
                if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
                    alert(`You have chosen ${userChoice}.`)
                    return userChoice;
                } else {
                    alert("You did not enter a valid selection. Please try again, dumbass.");
                    userChoice = userPlay();
                }
        }
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
            // Return computerChoice string
            return computerChoice;
        }
        
        // Output computer choice
        return console.log(computerPlay());
        // Call userPlay to get userSelection
        // Call computerPlay to get computerSelection
        // Compare user choice and computer choice
        // Output hand winner
    }
       
    // Play a five-round game of rock-paper-scissors
        // Set total points to 0 for user and computer
        // Play one round of rock-paper-scissors
        // Check if computer or user reached 5 points
        // Output point totals
        // When game ends, declare winner, ask to play again