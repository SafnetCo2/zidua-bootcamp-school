let btn = document.getElementById('addToDo');
let div = document.getElementById('toDoContainer');
let inputField=  document.getElementById('inputField');


btn.addEventListener('click',function(){
    let paragraph=document.createElement('p');
    paragraph.innerText= inputField.value;
    div.appendChild(paragraph);
    inputField.value='';

    paragraph.addEventListener('dblclick',function(){
        div.removeChild(paragraph);
    });

});
let today = new Date();
console(today);