
// //forEach method
// const children = Array.from(document.getElementsByClassName('child'));

// children.forEach(child =>{
//     child.addEventListener('click', () => console.log(child.innerHTML));
// });

//Delagation

const parent =document.getElementById('parent');
parent.addEventListener('click',event => {
    if(event.target.className ==='child'){
        console.log(event.target.innerHTML);
    }
});
//event babbling

// //babbles two listeners
// const children = Array.from(document.getElementsByClassName('child'));

// children.forEach(child =>{
//     child.addEventListener('click', () => console.log('child.listener' + child.innerHTML));
// });

// //Delagation

// const parent =document.getElementById('parent');
// parent.addEventListener('click',event => {
//     if(event.target.className ==='child'){
//         console.log('parent listener'+event.target.innerHTML);
//     }
// });