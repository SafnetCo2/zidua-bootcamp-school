/*We are going to use the fetch()Links to an external site. method which requires at least one argument, the path to the resource, which in our case is the latter-day-prophets JSON file. fetch() then returns an asynchronous PromiseLinks to an external site. that provides a generic ResponseLinks to an external site. to the request. fetch() has built in error handling. With the string data retrieved, we can run a .json() method on the Response to convert it into a JavaScript object, which is easy to work with. Let's get started on your JavaScript! The following lines of code should be written in your prophets.js file. */

// Let's store the resource, the URL of the JSON file into a const variable to start.
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');
/*We will use a basic fetch() method and feed it the required argument, the URL and use the .then() method that returns a Promise which response we will work with as an argument to an anonymous function. We need to extract the JSON content from the noise of the full HTTP response by using the json() method. The second .then() method is then setup for us to work with the converted response data in JavaScript object format.  Initially we will test to see if we get a valid, parsed response using a console.table() method to output the results to the console. */
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);// temporary checking for valid response and data parsing
        // loop through every record and process each one into its own 'card'(HTML output), one at a time.This is easily done using a forEach methodLinks to an external site..We we define a function named "displayProphets" which will be called for each prophet record in the prophets list.
        prophets.forEach(displayProphets);
    });

//  Now we will store the results of the converted response into an array since the 
//data source is a neatly packed array of records named "prophets".
//See the JSON sourceLinks to an external site.to confirm this notation.
const prophets = jsonObject['prophets'];

//  Define a function named "displayProphets", somewhere in your js file but not in the fetch() method.The defined function will be hoisted by ruleLinks to an external site..In your function definition signature line, accept one parameter named "prophet" which will receive each element of the prophets array.
function displayProphets(prophet) {
    //create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    //change the textContent propeerty of the h2 element to contain the prophets full name
    h2.textContent = prophet.name + ' ' + prophet.lastname;
    // build the image attributes by using the setAttributes methof for the src ,alt and loading attribute values 
    ____.setAttribute('src', prophet.imageurl);
    ____.setAttribute('alt', 'portrait', + prophet.name + ' ' + prophet.lastname);
    ____.setAttribute('loading', 'lazy');
    //append the Selection(card)with h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    //append the html div with the cards class with section(card)
    document.querySelector('div.cards').appendChild(card);
}