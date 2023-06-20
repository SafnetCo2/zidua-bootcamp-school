// fetch('https://reqres.in/api/users',{
//     method: 'POST',
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name:'User 1'
//     })
// }).then(res =>{
//     return res.json();
// })
// .then(data => console.log(data))
// .catch(error => console.log('ERROR'));

// let response = fetch(url);
// fetch(url)
//     .then(response => {
//         // handle the response
//     })
//     .catch(error => {
//         // handle the error
//     });
//     fetch('/readme.txt')
//     .then(response => response.text())
//     .then(data => console.log(data));

//     async function fetchText() {
//         let response = await fetch('/readme.txt');
//         let data = await response.text();
//         console.log(data);
//     }
//     async function fetchText() {
//         let response = await fetch('/readme.txt');
    
//         console.log(response.status); // 200
//         console.log(response.statusText); // OK
    
//         if (response.status === 200) {
//             let data = await response.text();
//             // handle data
//         }
//     }
    
//     fetchText();

