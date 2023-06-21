//The fetch() requires only one parameter which is the URL of the resource that you want to fetch:
 let response = fetch(url);

//The fetch() method returns a Promise so you can use the then() and catch () methods to handle it:
/*Reading the Response
If the contents of the response are in the raw text format, you can use the text() method.The text() method returns a Promise that resolves with the complete contents of the fetched resource:
*/
fetch(url)
    .then(response => response.json())
    .then(data => console.log.log(data));
    //handles the response

async function fetchText() {
    let response = await fetch('/readme.txt');
    console.log(response.status); // 200
    console.log(response.statusText); // OK



    if (response.status === 200) {
        let data = await response.text();
        // handle data
    }
}
fetchText();