const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay =document.getElementById('result');
const possibleChoices =document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;
possibleChoices.forEach( possibleChoice => possibleChoice.addEventListener('click',(event) => {
userChoice= event.target.id;
userChoiceDisplay.innerHTML =userChoice;
generateComputerChoice();
}));


function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    

    if(randomNumber === 1){
        computerChoice = 'rock';
    }
    if(randomNumber === 2){
        computerChoice ='paper';
    }
    if(randomNumber === 3){
        computerChoice='scissors';
    }

computerChoiceDisplay.innerHTML=computerChoice;
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'draw';
    }
    else if(computerChoice === 'rock' && userChoice ==='paper'){
        result = 'lost';
    }
    else if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'win';
    }
    else if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'lose';
    }

    
    else if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'lose';
    
    }
    else(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'win!';
    }
 resultDisplay.innerHTML =result;
}
getResult();
