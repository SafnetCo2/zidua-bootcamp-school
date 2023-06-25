/*Challenge:
Array Manipulation with Functional Programming
Write a function manipulateArray(arr) that takes an array of integers arr as an input and performs the following operations on it using functional programming concepts:

Use map to double every value in the array.
Use filter to keep only values that are greater than 10.
Use reduce to find the sum of the remaining values
The function should return the final sum. */

// const arr = [1, 2, 3, 4, 5, 6, 7];

// const newArray = arr.filter(a => a % 2 === 0);
// console.log(newArray);
//  arr= [1, 2, 4, 8];
//const numbers = [1, 2, 4, 8];
// const sum = numbers.reduce((num1, num2) => {
//     //console.log(num1, num2);
//     return num1 + num2;
// });
// console.log(sum);
function manipulateArray(arr) {

    return arr*3;
}
arr = new Array(1, 2, 4, 8);
    const new_Array = arr
        .filter(a => a % 2 === 0)
        .map(a => a * a)//square of a number
        .reduce((a, b) => a + b);
console.log(new_Array);
