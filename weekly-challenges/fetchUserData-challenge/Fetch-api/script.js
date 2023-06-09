
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
            // document.querySelector('output').innerHTML=
            const html = data.data
                .map(user => {
                return`
                <div class='user'>
                <p><img src="${user.avatar}" alt="${user.first_name}"/></p>
                <p>Name: ${user.first_name}</p>
                <p>Email:${user.email}</p>
                </div>
                `;
                
            }).join('');
            console.log(html);
            document    
            .querySelector('#output')
            .insertAdjacentHTML('afterbegin', html);
        })

        .catch(error => {
            console.log(error);
        });
}
fetchUserData();
