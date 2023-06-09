async function getUsers() {
    let url = 'users.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
//async function getUserData()
async function getUserData() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                        
                            <h2>${user.firstName} ${user.lastName}</h2>
                            <h2>${user.Age}</h2>
                            <h2>${user.gender}</h2>
                            
                            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

//renderUsers();
getUserData();