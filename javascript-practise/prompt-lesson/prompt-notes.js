//use strict mode
//Eliminates some javascript silent errors by changing them to throw errors.
//Fixes mistakes that make it difficult for JavaScript engines 
//to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
"use strict"
//require loads this funtion which prompt-sync
//exports a this function using a variable ps
const prompt = require("prompt-sync")({sigint: true});

//const ps = require("prompt-sync");
//const prompt = ps({sigint: true});/

// function that creates prompt callthe function by referencing ps
//pass config informationJo on ps function to terminate the  (sigint) that is if any interrupt signal is generated treat it accordingly
let name = prompt("Enter your name: ")//user input
console.log(`Hello ${name}`)
//use prompt to 
//taken input from the user
//display output