"use strict";
const prompt = require("prompt-sync")({sigint:true});
let length = parseFloat(prompt('Enter length: '));
let width=parseFloat(prompt('Enter width:  '));
let area= length*width;
let perimeter=(length+width)*2;
console.log(`Area : ${area}`);
console.log(`perimeter: ${perimeter}`);