"use strict" //removes errors in js and fixes them
const prompt = require("prompt-sync")({sigint: true});
//require loads the function, using prompt function with a variable 
let num1 = parseInt(prompt("Enter the first Number: "));
let num2 = parseInt(prompt("Enter the second number: "));
let results= num1+num2;
let product = num1*num2;
let quontient = num1%num2;
console.log(`The sum of two numbers${results}`)
console.log(`The product of two numbers${product}`)
console.log(`The sum of two numbers${quontient}`)


//without user input
let a =4;
let b =3;
let c = a+b;
console.log(c)