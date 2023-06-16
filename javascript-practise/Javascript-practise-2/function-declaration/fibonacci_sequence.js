function fibonacci_sequence(num){
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i=0;
    for(let i =  0; i < num; i++){
        sum =num1+num2;
        num1 =num2;
        num2=sum;
    }
return num2;
}
console.log("Fibonacci(5): " + fibonacci_sequence(9));
console.log("Fibonacci(8): " + fibonacci_sequence(8));