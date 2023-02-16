const rock = ["rock", "paper", "covers", "spock", "vaporises"]; // Each "weapon" array has its own name first, followed by pairs of "what beats it" & "how thing beats it"
const paper = ["paper", "scissors", "cut", "lizard", "eats"];  //  e.g scissors cuts paper, lizard eats paper.
const scissors = ["scissors", "rock", "crushes", "spock", "smashes"];
const lizard = ["lizard", "scissors", "decapitate", "rock", "crushes"];
const spock = ["spock", "paper", "disproves", "lizard", "poisons"];
const weapons = [rock, paper, scissors, lizard, spock];
const playScoreOut = document.getElementById("playScoreOut");
const compScoreOut = document.getElementById("compScoreOut");
const roundText = document.getElementById("roundText");
const winLoseText = document.getElementById("winLoseText");
const overlayTransparent = document.getElementById("overlayTransparent");
const overlayCenter = document.getElementById("overlayCenter");
const btns = document.querySelectorAll(".btn");
    btns.forEach(btn => {
        btn.addEventListener("click", () => playRound(btn.id)) 
    })
document.getElementById("newGameButton").addEventListener("click", () => newGame());
let playScore = 0;
let compScore = 0;

function playRound(playChoiceString){
    let playChoice = playChoiceArrayFind(playChoiceString) //  Immediately "swap" string for corresponding array. Not absolutely required, but makes comparing with comp choice like for like, so less
    let compChoice = getCompChoice();                  //     working out what is required for any given comparison.
    let winner = findWinner(playChoice, compChoice); 
    if (winner == "computer"){compScore ++}
    else if (winner == "player"){playScore ++}
    let resultText = textMaker(winner, compChoice, playChoice);
    playScoreOut.textContent = `${playScore}`;
    compScoreOut.textContent = `${compScore}`;
    roundText.textContent = `${resultText}`;
    firstToFive(playScore, compScore);}

function getCompChoice(){
    let compChoice = weapons.at(Math.floor(Math.random()*(weapons.length)))
    return compChoice;
}
    // Finds the array that corresponds to the player choice string input. Needed to make the "method of beating" part of the text work properly
function playChoiceArrayFind(playChoiceString){
    let playChoiceArray;
    let i=0;
    while (i < weapons.length){
        if(weapons[i][0] === playChoiceString){
            playChoiceArray = weapons[i];
            break;
        }
        i += 1;
    }
    return playChoiceArray;
}

function findWinner(playChoice, compChoice){
    let winner;
    if (compChoice[0] === playChoice[0]) 
        { winner = "tie" }
    else if(compChoice.includes(playChoice[0])) 
            { winner = "player"}              
    else    { winner = "computer" } 
    return winner;
}

function firstToFive(playScore, compScore){
    if ((playScore === 5) || (compScore === 5)){
        overlayTransparent.classList.remove("inactive");
        overlayCenter.classList.remove("inactive");
    }
    if (playScore === 5){winLoseText.textContent = "YOU WIN!"}
    else {winLoseText.textContent = "YOU LOSE!"}
}

function newGame(){
    overlayTransparent.classList.add("inactive");
    overlayCenter.classList.add("inactive");
    playScoreOut.textContent = "0";
    compScoreOut.textContent = "0";
    roundText.textContent = "Begin next round";
    playScore = 0;
    compScore = 0;
}

function firstCaps(stringIn){
    let stringOut = stringIn.charAt(0).toUpperCase() + stringIn.slice(1);
    return stringOut;
}

function howItWins(winner, compChoice, playChoice){
    let index;
    let howItWins;
    if(winner == "player"){
        index = compChoice.indexOf(playChoice[0]);
        index += 1;
        howItWins = compChoice[index];
    }
    else if(winner == "computer"){
        index = playChoice.indexOf(compChoice[0]);
        index += 1;
        howItWins = playChoice[index];
    }
    return howItWins;
}

function textMaker(winner, compChoice, playChoice){
    if (winner == "tie"){
        resultText=("Tie round.");
        }
    else if(winner == "computer"){
        if (playChoice == spock){  //This just capitalises Spock if it won't be capitalised by winning.
            resultText = (`You lose. ${firstCaps(compChoice[0])} ${howItWins(winner, compChoice, playChoice)} ${firstCaps(playChoice[0])}.`);
        }
        else{
            resultText = (`You lose. ${firstCaps(compChoice[0])} ${howItWins(winner, compChoice, playChoice)} ${playChoice[0]}.`);
        }
    }            
    else if(winner == "player"){
        if (compChoice == spock){
            resultText = (`You win. ${firstCaps(playChoice[0])} ${howItWins(winner, compChoice, playChoice)} ${firstCaps(compChoice[0])}.`);
        }
        else{
            resultText = (`You win. ${firstCaps(playChoice[0])} ${howItWins(winner, compChoice, playChoice)} ${compChoice[0]}.`);
        }
    }
    return resultText;
}   