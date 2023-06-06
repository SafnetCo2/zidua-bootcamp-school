

"use strict"

const prompt = require("prompt-sync")({sigint: true});


const number = parseInt(prompt("Enter an interger: ")); 

 let sum = 0;
 //loop through to get sum of ...n
 // in each interation i is increased by 1
 for(let i = 1; i<=number; i++){
    sum +=i;
 }
 console.log(`The sum of n numbers is ${sum}`)


