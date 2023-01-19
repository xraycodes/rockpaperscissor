


function getComputerChoice() {
    //must return rock papaer or scissors(3 options)
    choices = ['rock','paper','scissors'];
    randomSelection = Math.floor(Math.random() * 3);
    console.log(choices[randomSelection]);
}

getComputerChoice()