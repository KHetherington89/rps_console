// Remember that compChoice is always given as the name of a const containing an array.
// playChoice is always taken as a string.

const rock = ["rock", "paper", "spock"];
const paper = ["paper", "scissors", "lizard"];
const scissors = ["scissors", "rock", "spock"];
const lizard = ["lizard", "scissors", "rock"];
const spock = ["spock", "paper", "lizard"];
const weapons = [rock, paper, scissors, lizard, spock];
let playScore = 0;
let compScore = 0;

function getCompChoice(){
    let compChoice = weapons.at(Math.floor(Math.random()*(weapons.length)))
    return compChoice;
    }

function findWinner(playChoice, compChoice){
    let winner;
    if (compChoice[0] === playChoice) 
        { winner = "tie" }
    else if(compChoice.includes(playChoice)) 
            { winner = "player"}              
    else    { winner = "computer" } 
    return winner;
    }

function textMaker(winner, compChoice, playChoice){
    if (winner == "tie"){
        resultText=("Tie round.");
        }
        else if(winner == "computer"){
            resultText = (`You lose. ${compChoice[0].charAt(0).toUpperCase() + compChoice[0].slice(1)} beats ${playChoice}`);
        }            
        else if(winner == "player"){
            resultText = (`You win. ${playChoice.charAt(0).toUpperCase() + playChoice.slice(1)} beats ${compChoice[0]}`);
        }
        return resultText;
    }
    
function playRound(playChoice){
    let compChoice = getCompChoice();
    let winner = findWinner(playChoice, compChoice); 
    if (winner == "computer"){compScore ++}
    else if (winner == "player"){playScore ++}
    let textToShow = textMaker(winner, compChoice, playChoice);
    const startText = document.getElementById("startText");
    startText.textContent = "PLAYER COMPUTER";
    const scoreLine = document.createElement("p");
    scoreLine.textContent = `${playChoice} ${playScore} : ${compScore} ${compChoice[0]}`;
    const scoreBox = document.getElementById("scoreBox");
    scoreBox.appendChild(scoreLine);
    }

    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('click', function(){
            playRound(btn.id);
        }) 
    });







