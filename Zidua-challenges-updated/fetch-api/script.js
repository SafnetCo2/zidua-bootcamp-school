function fetchUserData(url){
    //Return the promise generated by fetch()
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((error) => {
            console.log(error);
        });
    
}

async function getUserData() {
    let data = fetchUserData('https://dummyjson.com/users');
    console.log(data);
}
getUserData();



function getUserAge() {
    // Return the Promise generated by fetchUserData()
    return fetchUserData("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data.firstName; // Return the user age
        });
}


async function getAgeAndLog() {
    // Call getUserAge() and log user age to console using async/await syntax
    try {
        let firstName = await getUserAge();
        console.log(firstName);
    } catch (error) {
        console.log(error);
    }
}

getAgeAndLog();

























