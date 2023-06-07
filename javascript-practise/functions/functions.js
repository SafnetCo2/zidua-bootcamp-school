// Functions are blocks of code that can be defined and then called by name. 
//They are used to perform a specific task and can accept input (called parameters) 
//and return output (called a return value).

// To define a function in JavaScript, use the function keyword followed by the 
//name of the function and a set of parentheses. The code to be executed by the function is written inside curly braces.
function greet() {
    console.log("Hello, World!");
  }
greet()  
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("John"); // Outputs "Hello, John!" to the console
  greet("Jane"); // Outputs "Hello, Jane!" to the console
//   You can also pass parameters to a function by including them within the parentheses when calling the function.
//    The values of the parameters are then passed to the function as arguments.  

function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("John"); // Outputs "Hello, John!" to the console
  greet("Jane"); // Outputs "Hello, Jane!" to the console

//   To return a value from a function, you can use the return keyword followed by the value to be returned. For example:
function add(x, y) {
    return x + y;
  }
  
  console.log(add(2, 3)); // Outputs 5 to the console
  