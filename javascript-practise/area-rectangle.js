//Quiz
// Area and Perimeter of a Rectangle
// The program should:

// – Prompt the user to enter the length and width of the rectangle.
// – Calculate the area and perimeter of the rectangle using the length and width entered by the user.

"use strict"
const prompt = require("prompt-sync")({sigint: true});// require loads the program with the function prompt
//signit terminates the program in the terminal after it has been excuted
let length = parseFloat(prompt("Enter the length of a rectangle: ")); 
let  width = parseFloat(prompt("Enter the width of a rectangle:  "));
let area= length*width;
let perimeter= 2*(length+width)
console.log(`The area of a rectangle is ${area}`);
console.log(`The perimeter of a rectangle is ${perimeter}`);

