// let sum =0;
// for(let i=1; i<10;i++){
//     sum+=1;

// }
// console.log(sum);
"use strict";

const prompt = require("prompt-sync")({sigint: true});
//The parseInt() function parses a string argument and 
//returns an integer of the specified radix 
//(the base in mathematical numeral systems).

const number = parseInt(prompt("Enter an interger: ")); 

 let sum = 0;
 //loop through to get sum of ...n
 // in each interation i is increased by 1
 for(let i = 1; i<=number; i++){
    sum +=i;
 }
 console.log(`The sum of n to numbers ${number} is ${sum}`)


//  let sum =0;
//  for(let i= 1;i<20;i++){
//     sum +=1;

//  }
//  console.log(sum);

// let counter =0;
// function timeout(){
//     setTimeout(function(){
//         console.log('hi'+ counter++);
//         timeout();
//     },2000);
// }
//timeout();
(function (){
    console.log('immediately invoked function expression');
})();
/*A function expression is very similar to, and has almost the same syntax as, a function declaration. The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined. See also the */