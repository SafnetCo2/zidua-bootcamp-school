
// function callBack(value){
//     console.log(value);
// }

// function sumAsync(num1,num2){
//     const total= num1+num2;
//     return(total);
// }
// sumAsync(10,20);
/*
The sumAsync function should take three parameters: num1, num2, and callback.
Inside the sumAsync function, add num1 and num2 together and store the result in a variable called result.
Generate a random delay between 1 and 5 seconds using the setTimeout function. Pass a callback function to setTimeout that will call the callback function with the result variable as its argument.
Test your sumAsync function by calling it with two numbers and a callback that logs the result to the console.
*/



function sumAsync(num1,num2){
    const result = num1 + num2;
    return result;
}
function ask(){
    setTimeout(() => {
        console.log('takes 2seconds to excute callback function')
    },2000);

}
sumAsync(20,10, ask());

