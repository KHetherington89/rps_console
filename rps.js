// Rock Paper Scissors

// VALUES: 1=Rock, 2=Paper, 3=Scissors

// Generates a random number 1-3
function getCompChoice(){
    let compChoice;
    compChoice = Math.floor(Math.random()*3) + 1
    console.log("compChoice " + compChoice);
    return compChoice;
}


/* Prompts the player for input and immediately converts to lowercase before storing in playChoice
    The +"a" on the prompt here prevents an error if the player cancels by preventing the prompt returning null,
    hence the extra a on the options.*/
function getPlayChoice(){
    let playChoice
    playChoice = ("a"+prompt("Choose Your Weapon!","")).toLowerCase();
    // While loop repeats request for input if an invalid choice is made
    while (playChoice != "arock" && playChoice != "apaper" && playChoice != "ascissors"){
        playChoice = ("a"+prompt("Please make a valid choice!","")).toLowerCase();
    }
    console.log("playChoice " + playChoice);
    // Converts playChoice to numbers, just for easier comparison to compChoice
    if (playChoice == "arock"){
        playChoice = 1;
    }
    else if (playChoice == "apaper"){
        playChoice = 2;
    }
    else if (playChoice == "ascissors"){
        playChoice = 3;
    }
    console.log("playChoice " + playChoice);
    return playChoice;
}


// Compares player inputs, determines winner, adds to scores, and alerts player of outcome
function playRound (playChoice, compChoice){
    let winner;
    // 1st IF determines tie game
    if (playChoice == compChoice) { winner = "tie" }
    // 2nd IF determines player win
    else if (playChoice > compChoice ||((compChoice == 3)&&(playChoice == 1))) { winner = "player" }
    // 3rd IF determines computer win
    else if (compChoice > playChoice ||((playChoice == 3)&&(compChoice == 1))) { winner = "comp" }
    return winner;
}

function playGame(){
    alert("Welcome to Rock Paper Scissors \n First to 5 \n Just type your choice in the prompt!");
    let playScore = 0;
    let compScore = 0;
    // While loop looks for either players score to reach 5
    while((playScore < 5) && (compScore < 5)){
        let winner = playRound(getPlayChoice(),getCompChoice())
        // Tie game doesn't increment any score counter
        if (winner == "tie"){
        alert("Tie game! Try again");
        }
        // Increments the player score and announces win
        else if (winner == "player"){
            playScore ++
            alert(`You win this round.\n Player: ${playScore}\n Computer: ${compScore}`);
        }
        // Increments computer score and announces win
        else if (winner = "comp"){
            compScore ++
            alert(`Computer wins this round.\n Player: ${playScore}\n Computer: ${compScore}`);
        }
    }

    let scoreLine = `Player ${playScore} : ${compScore} Computer`

    if (playScore == 5){
        alert(`Congratulations, you win. \n ${scoreLine}`)}
    else 
    alert(`You lose. Try again. \n ${scoreLine}`);
    
    alert("Thank you for playing. \n Reload the page to play again.")
}

playGame();




