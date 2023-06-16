var you;
var yourScore =0;
var opponent;
var opponentScore=0;
var choices =['rock','paper','scissors'];
window.onload =function(){
    for(let i =0; i<3; i++){
        let choice =document.createElement('img');
        choice.id =choices[1];
        choices.src =choices[i] + 'assests/paper.jpg';
        choice.addEventListener('click', selectChoice);
        document.getElementById('choices').append(choice);
    }
};

function selectChoice(){
    you = this.id;
    document.getElementById('your-choice').src=you + 'assests/rock.jpg';
    
    //random for opponet
    opponent = choices[Math.floor(Math.random()*3)];
    document.getElementById('opponent-choice').src =opponent + 'assests/scssors.jpg';
    //check the winneryou 
    if(you == opponent){
        yourScore +=1;
        opponentScore +=1;
    }else{
        if(you =='rock'){
            if(opponent == 'scissors'){
                yourScore += 1;

            }
            else if(opponent == 'paper'){
                opponentScore +=1;

            }
        
        
        }
        else if(you =='scissors'){
           if(opponent == 'paper'){
            yourScore += 1;

          }
        else if(opponent == 'rock')
          opponentScore+=1;
        }

        else if(you =='paper'){
        if(opponent == 'rock'){
            yourScore += 1;

        }
        else if(opponent == 'scissors')
        opponentScore+=1;
    }
    document.getElementById('your-score').innerText=yourScore;
    document.getElementById('opponet-score').innerText=opponetScore;
 }

}



