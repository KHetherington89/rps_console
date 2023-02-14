// Remember that compChoice is always given as the name of a const containing an array.
// playChoice is always taken as a string.

const rock = ["rock", "paper", "covers", "spock", "vaporises"]; // Each "weapon" array has its own name first, followed by pairs of "what beats it" & "how thing beats it"
const paper = ["paper", "scissors", "cuts", "lizard", "eats"];
const scissors = ["scissors", "rock", "crushes", "spock", "smashes"];
const lizard = ["lizard", "scissors", "decapitates", "rock", "crushes"];
const spock = ["spock", "paper", "disproves", "lizard", "poisons"];
const weapons = [rock, paper, scissors, lizard, spock];
const playScoreOut = document.getElementById("playScoreOut");
const compScoreOut = document.getElementById("compScoreOut");
const roundText = document.getElementById("roundText");
const winLoseText = document.getElementById("winLoseText");
const gameOver = document.getElementById("gameOver");
const btns = document.querySelectorAll(".btn");
document.getElementById("newGameButton").addEventListener("click", () => newGame());
let playScore = 0;
let compScore = 0;

function getCompChoice(){
    let compChoice = weapons.at(Math.floor(Math.random()*(weapons.length)))
/*     console.log(compChoice); */
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

function firstCaps(stringIn){
    let stringOut = stringIn.charAt(0).toUpperCase() + stringIn.slice(1);
    return stringOut;
}
// Finds the array that corresponds to the player choice string input. Needed to make the "method of beating" part of the text work properly
function playChoiceArray(playChoice){
    let playChoiceArrayInt;
    let i=0;
    while (i < weapons.length){
        if(weapons[i][0] === playChoice){
            playChoiceArrayInt = weapons[i];
            break;
        }
        i += 1;
    }
    return playChoiceArrayInt;
}

function howItWins(winner, compChoice, playChoice){
    let index;
    let howItWins;
    if(winner == "player"){
        index = compChoice.indexOf(playChoice);
        index += 1;
        howItWins = compChoice[index];
    }
    else if(winner == "computer"){
        let playChoiceArrayExt = playChoiceArray(playChoice);
        index = playChoiceArrayExt.indexOf(compChoice[0]);
        console.log(index);
        console.log(playChoiceArrayExt);
        index += 1;
        howItWins = playChoiceArrayExt[index];
    }
    return howItWins;
}



function textMaker(winner, compChoice, playChoice){
    if (winner == "tie"){
        resultText=("Tie round.");
        }
        else if(winner == "computer"){
            if (playChoice == "spock"){  //This just capitalises Spock if it won't be capitalised by winning.
                resultText = (`You lose. ${firstCaps(compChoice[0])} ${howItWins(winner, compChoice, playChoice)} ${firstCaps(playChoice)}`);
            }
            else{
                resultText = (`You lose. ${firstCaps(compChoice[0])} ${howItWins(winner, compChoice, playChoice)} ${playChoice}`);
            }
        }            
        else if(winner == "player"){
            if (compChoice == spock){
                resultText = (`You win. ${firstCaps(playChoice)} ${howItWins(winner, compChoice, playChoice)} ${firstCaps(compChoice[0])}`);
            }
            else{
                resultText = (`You win. ${firstCaps(playChoice)} ${howItWins(winner, compChoice, playChoice)} ${compChoice[0]}`);
            }
        }
        return resultText;
    }
    
function playRound(playChoice){
    /* console.log(typeof(playChoice)); */
    let resultText;
    let compChoice = getCompChoice();
    let winner = findWinner(playChoice, compChoice); 
    if (winner == "computer"){compScore ++}
    else if (winner == "player"){playScore ++}
    resultText = textMaker(winner, compChoice, playChoice);
    playScoreOut.textContent = `${playScore}`;
    compScoreOut.textContent = `${compScore}`;
    roundText.textContent = `${resultText}`;
    firstToFive(playScore, compScore);
}

function firstToFive(playScore, compScore){
    if ((playScore == 5) || (compScore == 5)){
        gameOver.classList.add("active");
    }
    if (playScore == 5){winLoseText.textContent = "YOU WIN!"}
    else {winLoseText.textContent = "YOU LOSE!"}
}
    

function addListener(){   
    btns.forEach(btn => {
        btn.addEventListener("click", () => playRound(btn.id)) 
    })
}

function newGame(){
    gameOver.classList.remove("active");
    playScore = 0;
    compScore = 0;
    playScoreOut.textContent = `${playScore}`;
    compScoreOut.textContent = `${compScore}`;
    roundText.textContent = "Begin next round";
}


addListener();
