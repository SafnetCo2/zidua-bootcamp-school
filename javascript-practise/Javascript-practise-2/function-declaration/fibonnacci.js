// program to generate fibonacci series up to n terms

// take input from the user

//The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. 
//After that, the next term is defined as the sum of the previous two terms.

//0, 1, 1, 2, 3, 5, 8, 13, 21, ...
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
// program to generate fibonacci series up to a certain number

// take input from the user

function fibonacci(num) {
	let num1 = 0;
	let num2 = 1;
	let sum;
	let i = 0;
	for (i = 0; i < num; i++) {
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
	}
	return num2;
}

console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));
function fibonacci(num) {
	if (num == 1)
		return 0;
	if (num == 2)
		return 1;
	return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));
