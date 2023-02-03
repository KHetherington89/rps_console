// Rock Paper Scissors

// PROBLEM: Create a version of rock paper scissors that can be played in the developer console

// BREAKDOWN:

// 1 - Define values for each option (rock, paper, scissors)
// 2 - Create variables to store players choice and computers choice
// 3 - Make computer choose between the options at random
// 4 - Instruct and prompt player
// 5 - Allow player to input their choice
// 6 - Check that player input is valid
// 7 - Compare choices to decide winner
// 8 - Declare winner
// 9 - Track scores for each player
// 10 - Best of 5
//      - Count number of rounds played
//      - If rounds < 5, play again
//      - If rounds >= 5, stop
//      - Determine highest score and declare overall winner




// VALUES: 1=Rock, 2=Paper, 3=Scissors

let playChoice = 0;
let compChoice = 0;
let playScore = 0;
let compScore = 0;

function getCompChoice(){
    compChoice = Math.floor(Math.random()*3) + 1
}

getCompChoice();

console.log(compChoice);

playChoice = prompt ("Choose Your Weapon!","");

console.log(playChoice);