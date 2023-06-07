

"use strict"

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
 console.log(`The sum of n numbers is ${sum}`)


