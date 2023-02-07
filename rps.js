// Rock Paper Scissors

// VALUES: 1=Rock, 2=Paper, 3=Scissors

let weapons = ["rock", "paper", "scissors"];

const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('click', playerClicks) 
    });

function getCompChoice(){
    let compChoice = weapons.at(Math.floor(Math.random()*(weapons.length)))
    console.log(compChoice);
    return compChoice;
}

function playerClicks(){
    playChoice=(this.id);
    console.log(playChoice);
    let compChoice = getCompChoice();
    let resultText;
    if (compChoice === playChoice){
        resultText=("tie");
        }
    else if((playChoice === "rock" && compChoice === "paper") || (playChoice === "paper" && compChoice === "scissors") ||
            (playChoice === "scissors" && compChoice === "rock")){
            resultText=("You lose");
            }
    else if((compChoice === "rock" && playChoice === "paper") || (compChoice === "paper" && playChoice === "scissors") ||
            (compChoice === "scissors" && playChoice === "rock")){
            resultText=("You win");
            } 
    
    const scoreTable = document.querySelector("#scoreTable");
    const scoreBox = document.createElement("p");
    scoreBox.classList.add("scoreBox");
    scoreBox.textContent=(`${resultText}`);
    scoreTable.appendChild(scoreBox);
}





