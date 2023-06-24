
function fetchUserData() {

    fetch("https://reqres.in/api/users?page=2")
        .then(response => {
            if (!response.ok) {
                throw Error('ERROR');
            }
            return response.json();

        })
        .then(data => {
            console.log(data.data);
        })

        .catch(error => {
            console.log(error);
        });
}
fetchUserData();










// let url = fetchUserData('https://jsonplaceholder.typicode.com/todos/,1');
// function fetchUserData(url) {

//     // TODO: Write code to fetch user data from API endpoint and return Promise
//     fetchUserData(url)
//         .then(response => response.text(url))
//         .then(data => console.log(data));

// }
// fetchUserData(url);
// async function getUserData() {
//     // TODO: Call fetchUserData() and log user data to console using async/await syntax
//     let response = await fetchUserData(url)
//     let data = await response.text();
//     console.log(data);
// }

// getUserData();

// function getUserAge() {
//     // TODO: Call fetchUserData() and return user age as Promise
// }

// async function getAgeAndLog() {
//     // TODO: Call getUserAge() and log user age to console using async/await syntax
// }
fetch