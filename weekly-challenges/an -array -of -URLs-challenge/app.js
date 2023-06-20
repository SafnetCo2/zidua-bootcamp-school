
function fetchAndDisplay(urls){
    .then((response) => response.json())
    .then((data) => {
            try {
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    

    // your code here
    let promise1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
    let promise2 = fetch('https://jsonplaceholder.typicode.com/todos/2');
    let promise3 = fetch('https://jsonplaceholder.typicode.com/todos/3');

    promise1.finally([promise1, promise2, promise3])
        .then((responses) => {
            console.log(responses);
        });


    let container = document.querySelector('container');
    container.innerHTML = html;
}


fetchAndDisplay(urls);

