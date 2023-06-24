//find the MinMaxSum with rest 
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getMinMaxSum(arr) {
    const maximum = Math.max(...arr);
    const minimum = Math.min(...arr);
    const mainsumOfMinMax = arr.reduce((prev, curr) => prev + curr);
    const maxSum = mainsumOfMinMax - minimum;
    const minSum = mainsumOfMinMax - maximum;
    console.log(maxSum, minSum);


}

getMinMaxSum([1, 2, 3, 4, 5, 6]);










/**Challenge:
Write a function getMinMaxSum that takes an array of numbers as an argument and returns an object with three properties: min, max, and sum

The min property should be the minimum value in the array, the max property should be the maximum value in the array, and the sum property should be the sum of all the values in the array

Your function should use destructuring, spread, and rest operators to achieve this

Here’s an example of how your function should work:
const numbers = [1, 2, 3, 4, 5];

const result = getMinMaxSum(numbers);

console.log(result); // { min: 1, max: 5, sum: 15 }
In this example, the getMinMaxSum function is called with an array of numbers [1, 2, 3, 4, 5]. The function should return an object with min set to 1, max set to 5, and sum set to 15.

Note:
The order of the properties in the returned object does not matter. */