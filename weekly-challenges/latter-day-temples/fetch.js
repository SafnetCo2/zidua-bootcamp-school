const requestURL = ('data.json');
async function getldsTemple(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsonObject = await response.json();
        console.log(jsonObject);
        const temples = jsonObject['temples'];
        temples.forEach(displayTemples);
    }
};
getldsTemple(requestURL);
function displayTemples(item) {
    let card = document.createElement('section');
}



getProphets(requestURL);

function displayProphets(item) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let img = document.createElement('img');

}