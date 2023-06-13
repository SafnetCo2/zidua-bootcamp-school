const div = document.querySelector('div')

div.addEventListener('click', event =>{
    const target = event.target

    if(target.tagName === 'BUTTON'){
        console.log(target.innerText);
        div.style.background='tan';
        

    }
});