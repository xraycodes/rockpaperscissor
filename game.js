function getComputerChoice() {
    //must return rock papaer or scissors(3 options)
    choices = ['rock','paper','scissors'];
    randomSelection = Math.floor(Math.random() * 3);
    return (choices[randomSelection].toUpperCase());
    }

function getPlayerChoice(){
    playerChoiceQuestion = prompt("Rock, Paper, Scissors?: ")
    playerChoice = playerChoiceQuestion.toUpperCase();
    return playerChoice
    }

function RockPaperScissors(playerSelection,computerSelection) {
    //input player selection
    playerChoice = playerSelection
    computerChoice = computerSelection

    //compare that to computer selection
    //rock > scissors
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
    //draw
    else {
        return("Enter valid answer");
    }
}

    //print out winner 

function game(){
    for (let i = 0; i <= 4; i++) {
        finalComputerChoice = getComputerChoice();
        finalPlayerChoice = getPlayerChoice(); 
        console.log(RockPaperScissors(finalPlayerChoice, finalComputerChoice));
    }
        
}
 
game();