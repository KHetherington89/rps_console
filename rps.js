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


alert("Welcome to Rock Paper Scissors \n First to 5 \n Just type your choice in the prompt!");


let playChoice;
let compChoice;
let playScore = 0;
let compScore = 0;
let roundWinner;

// Generates a random number 1-3
function getCompChoice(){
    compChoice = Math.floor(Math.random()*3) + 1
}

getCompChoice();

console.log(compChoice);

// Prompts the player for input and immediately converts to lowercase before storing in playChoice
// The +a on the prompt here prevents an error if the player cancels by preventing the prompt returning null,
// hence the extra a on the options.
playChoice = ("a"+prompt("Choose Your Weapon!","")).toLowerCase();

// While loop repeats request for input if an invalid choice is made
while (playChoice != "arock" && playChoice != "apaper" && playChoice != "ascissors"){
    playChoice = ("a"+prompt("Please make a valid choice!","")).toLowerCase();
}

console.log(playChoice);

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

console.log(playChoice);

// Compares player inputs, determines winner, adds to scores, and alerts player of outcome
// 1st IF determines tie game
if (playChoice == compChoice){
    alert("Tie game! Try again");
}
// 2nd IF determines player win
else if (playChoice > compChoice ||((compChoice == 3)&&(playChoice == 1))){
    playScore ++
    alert(`You win this round. \n Score is Player:${playScore} to Computer:${compScore}!`);
}
// 3rd IF determines computer win
else if (compChoice > playChoice ||((playChoice == 3)&&(compChoice == 1))){
    compScore ++
    alert(`Computer wins this round. \n Score is Player:${playScore} to Computer:${compScore}!`);
}
// Final else in case something shits itself
else {alert("Whoopsie doodle, something went wonky. \n Try again eh.");}

console.log(playScore);
console.log(compScore);