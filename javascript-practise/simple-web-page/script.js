// DOM Implementation
// Everything in the DOM falls into one of these two categories: selecting elements and manipulating elements. After creating our HTML and CSS files, we head into our app.js file to implement the following:

// Select: We reference all elements we want to make dynamic from our HTML code and assign them variables in our JavaScript file.
// Manipulate: Once we have selected and linked the variables, we create the various functions responsible for the manipulations and then link to the variables.
// How to Select Elements in the DOM
// To get access to the HTML elements that you want to manipulate, you need to make the JavaScript aware that such elements exist. This is what is generally referred to as “selecting” elements – basically linking them.

// In the DOM, there’s no one way to locate and reference an element for manipulation. Instead, it’ll depend on the selector you’ve used in the element’s tag.

// You do this by assigning the element to a variable. It takes the following format. Keep in mind that all DOM selectors are preceded by the documenbat object and a dot:

// const example = document.[DOMselector]

//elements to be selected
//paragra text to change greet
// greet
// btn add eventlistener
// change
const text =document.getElementById('para').innerHTML;
const 

// How to use getElementById
// You can use this selector to select the cart button. It’s very similar to the getElementsByClassName. The only difference is that because we use the ID to show uniqueness, it’s used on only one element. This method reads getElement, without an s.

// const cartButton = document.getElementById("button");
// The code above links the button with id “button” <button id="button"> from our HTML code to the variable cartButton in our JavaScript.
// redColor.addEventListener("click", function () {
//     cartButton.style.backgroundColor = "red";
//     itemTag.style.backgroundColor = "red";
//     imageCard.style.backgroundImage = 'url("./img/red-benz.webp")';
//   });
text.addEventListener('click', function(){
    paragraphText.text.background ='greet';


});