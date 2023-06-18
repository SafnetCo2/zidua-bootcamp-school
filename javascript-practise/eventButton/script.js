redB=document.getElementById('red');
blueB=document.getElementById('b;ue');
yellow=document.getElementById('yellow');



    function  random(number){

        return Math.floor(Math.random()*(number +1));


        redB.addEventListener('click',()=>{

            const red=`regb(${random(255)},${random(255)},${random(255)})`;
            
            document.body.style.backgroundColor=red;
        });

    }