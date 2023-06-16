let userScore = 0;
let compScore = 0;
//select elements
const userScore_span =document.getElementById('user-score');
const compScore_span =document.getElementById('comp-score');

const scoreBoard_div =document.querySelector('.score-board');
const result =document.querySelector('result >p');

const faCheck = document.getElementById('r');
const faxmark =document.getElementById('p');
const farrowright =document.getElementById('s');
//add eventlistener 

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber=Math.floor(Math.random() * 3);
    return choices[randomNumber];
}



function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result.innerHTML = userChoice + 'beats' + computerChoice + 'You Win';
}

function lose(){
    
}
function draw(){
    
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
        ('perfect you win');
        break;

        case 'rp':
        case 'ps':
        case 'sr':
        console.log('oops loose');
        break;

        case 'rr':
        case 'pp':
        case 'ss':
        console.log('draw');
        break;
    }



}

// function main which nest userall

function play(){
    faCheck.addEventListener('click',function(){
      game('r');
    });
    
    faxmark.addEventListener('click',function(){
        game('p');
    });
    farrowright.addEventListener('click',function(){
        game('s');
    });
}

play();

//create function game