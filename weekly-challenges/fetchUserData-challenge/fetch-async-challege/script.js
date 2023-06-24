function fetchUserData('https://dummyjson.com/users') {
    // TODO: Write code to fetch user data from API endpoint and return Promise
    return fetch(url)
        .then((res) => {
            console.log('resolved', res);
            return res.json();
        }).then(data => {
            console.log(data);
        }).catch((err) => {
            console.log('rejected', err);
        });
        
    
    
    
} fetchUserData();
async function getUserData() {
    // TODO: Call fetchUserData() and log user data to console using async/await syntax
    let data = fetchUserData('https://dummyjson.com/users');
    console.log(data);
}

getUserData();



function getUserAge() {
    return fetchUserData('https://dummyjson.com/users')
        .then((res) => res.json(url))
        .then((data) => {
            console.log(data);
            return data.age;
        });
        
}


async function getAgeAndLog() {
    // TODO: Call getUserAge() and log user age to console using async/await syntax
    try {
        let age = await getUserAge();
        console.log(age);
    } catch (err) {
        console.log(err);
    }
}

getAgeAndLog();