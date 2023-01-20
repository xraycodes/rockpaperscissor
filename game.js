    //must return rock paper or scissors(3 options)
function getComputerChoice() {
    choices = ['rock','paper','scissors'];
    randomSelection = Math.floor(Math.random() * 3);
    return (choices[randomSelection].toUpperCase());
    }

    //asks player to put in rock paper scissors
function getPlayerChoice(){
    playerChoiceQuestion = prompt("Rock, Paper, Scissors?: ")
    playerChoice = playerChoiceQuestion.toUpperCase();
    return playerChoice
    }

    //input player selection
function RockPaperScissors(playerSelection,computerSelection) {
    playerChoice = playerSelection
    computerChoice = computerSelection

    //compare player choice that to computer selection
    if (playerChoice == 'ROCK' & computerSelection == 'SCISSORS'){
        return('You win, rock beats scissors!');
    }
        else if (playerChoice == 'ROCK' & computerSelection == 'PAPER'){
            return('You lose, paper beats rock')
        }
        else if (playerChoice == 'ROCK' & computerSelection == 'ROCK'){
            return('You tie')
            }
    if (playerChoice == 'PAPER' & computerSelection == 'SCISSORS'){
        return('You lose, scissors beats paper!');
    }
        else if (playerChoice == 'PAPER' & computerSelection == 'ROCK'){
            return('You win, paper beats rock')
        }
        else if (playerChoice == 'PAPER' & computerSelection == 'PAPER'){
            return('You tie')
        }
    if (playerChoice == 'SCISSORS' & computerSelection == 'SCISSORS'){
        return('You tie');
        }
        else if (playerChoice == 'SCISSORS' & computerSelection == 'PAPER'){
            return('You win, scissors beats paper')
        }
        else if (playerChoice == 'SCISSORS' & computerSelection == 'ROCK'){
            return('You lose, rock beats scissors')
        }
    //player inputs not valid choice
    else {
        return("Enter valid answer");
    }
}

    //running the game 5 times
function game(){
    for (let i = 0; i <= 4; i++) {
        finalComputerChoice = getComputerChoice();
        finalPlayerChoice = getPlayerChoice(); 
        console.log(RockPaperScissors(finalPlayerChoice, finalComputerChoice));
    }
        
}
 
game();