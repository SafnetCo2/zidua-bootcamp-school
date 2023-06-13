// const div =document.querySelector('div');
const ul =document.querySelector('ul');
const div =document.querySelector('div');

ul.addEventListener('click',function(e){
    const target = e.target;
    if(target.matches('li')){
        target.style.backgroundColor='red';
        target.style.textalign='center';
    }
});
//newlist child append
const newDiv =document.createElement('li');
newDiv.textContent ='tomatoes';
ul.appendChild(newDiv);
//button

div.addEventListener('click', event => {
    const target = event.target;

    if(target.tagName==='BUTTON'){
        console.log('button clicked');
        div.style.backgroundColor='red';
        div.style.color='white';
        div.innerText='Event delagation';
    }

});
