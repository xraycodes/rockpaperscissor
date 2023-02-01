let playerScore = compScore = 0;
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerRunningScore = document.querySelector('.player-score')
const computerRunningScore = document.querySelector('.computer-score')
   
   //must return rock paper or scissors(3 options)
function computerPlay() {
    choices = ['rock','paper','scissors'];
    randomSelection = Math.floor(Math.random() * 3);
    return (choices[randomSelection].toUpperCase());
    }

/*    //asks player to put in rock paper scissors
function getPlayerChoice(){
    playerChoiceQuestion = prompt("Rock, Paper, Scissors?: ")
    playerChoice = playerChoiceQuestion.toUpperCase();
    return playerChoice
    }
*/

    //input player selection
function playRound(playerSelection,computerSelection) {
    //compare player choice that to computer selection
    if (playerSelection === computerSelection){
        const p = document.createElement('p')
        p.innerText = "It's a Tie"
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'ROCK' & computerSelection === 'SCISSORS'){          
        const p = document.createElement('p')
        p.innerText = 'You win, rock beats scissors'
        outcomeDiv.appendChild(p)
        playerScore++;
    } else if (playerSelection === 'ROCK' & computerSelection === 'PAPER'){     
        const p = document.createElement('p')
        p.innerText = 'You lose, paper beats rock'
        outcomeDiv.appendChild(p)
        compScore++;
    } else if (playerSelection === 'PAPER' & computerSelection === 'SCISSORS'){            
        const p = document.createElement('p')
        p.innerText = 'You lose, scissors beats paper'
        outcomeDiv.appendChild(p)
        compScore++;
    } else if (playerSelection === 'PAPER' & computerSelection === 'ROCK'){       
        const p = document.createElement('p')
        p.innerText = 'You win, paper beats rock'
        outcomeDiv.appendChild(p)
        playerScore++;
    } else if (playerSelection === 'SCISSORS' & computerSelection === 'PAPER'){      
        const p = document.createElement('p')
        p.innerText = 'You win, scissors beats paper'
        outcomeDiv.appendChild(p)
        playerScore++;
    } else if (playerSelection === 'SCISSORS' & computerSelection === 'ROCK'){     
        const p = document.createElement('p')
        p.innerText = 'You lose, rock beats scissors'
        outcomeDiv.appendChild(p)
        compScore++;
    }
}
    function winnerStatement(playerScore, compScore){
        if (playerScore === 5) {
            const p = document.createElement('h1')
            p.innerText = (`You win with score of ${playerScore} vs comp score of ${compScore}`)
            outcomeDiv.appendChild(p);
        }
        if (compScore === 5) {
            const p = document.createElement('h1')
            p.innerText = (`You lose with score of ${playerScore} vs comp score of ${compScore}`)
            outcomeDiv.appendChild(p);
        }
    }

    function runningScore(playerScore, compScore){
       playerRunningScore.innerText = `player score: ${playerScore}`;
       computerRunningScore.innerText = `computer score: ${compScore}`;
    }
    //running the game 5 times
/*function game(){
    for (let i = 0; i <= 4; i++) {
        finalComputerChoice = getComputerChoice();
        finalPlayerChoice = getPlayerChoice(); 
        console.log(RockPaperScissors(finalPlayerChoice, finalComputerChoice));
    }
        
}
*/

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'ROCK'
    playRound(playerSelection, computerSelection)
    winnerStatement(playerScore, compScore)
    runningScore(playerScore, compScore)
})

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'PAPER'
    playRound(playerSelection, computerSelection)
    winnerStatement(playerScore, compScore)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'SCISSORS'
    playRound(playerSelection, computerSelection)
    winnerStatement(playerScore, compScore)
})
