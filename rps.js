const weapons = ["rock", "paper", "scissors"];
let playScore = 0;
let compScore = 0;

function getCompChoice(){
    let compChoice = weapons.at(Math.floor(Math.random()*(weapons.length)))
    return compChoice;
    }

function findWinner(playChoice, compChoice){
    let winner;
    if (compChoice === playChoice) 
        { winner = "tie" }
    else if((playChoice === "rock" && compChoice === "paper") || (playChoice === "paper" && compChoice === "scissors") ||
            (playChoice === "scissors" && compChoice === "rock")) 
                { winner = "computer"}              
    else if((compChoice === "rock" && playChoice === "paper") || (compChoice === "paper" && playChoice === "scissors") ||
            (compChoice === "scissors" && playChoice === "rock")) 
                { winner = "player" } 
    return winner;
    }

function textMaker(winner, compChoice, playChoice){
    if (winner == "tie"){
        resultText=("Tie round.");
        }
        else if(winner == "computer"){
            resultText = (`You lose. ${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)} beats ${playChoice}`);
        }            
        else if(winner == "player"){
            resultText = (`You win. ${playChoice.charAt(0).toUpperCase() + playChoice.slice(1)} beats ${compChoice}`);
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
    scoreLine.textContent = `${playChoice} ${playScore} : ${compScore} ${compChoice}`;
    const scoreBox = document.getElementById("scoreBox");
    scoreBox.appendChild(scoreLine);
    }

    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('click', function(){
            playRound(btn.id);
        }) 
    });







