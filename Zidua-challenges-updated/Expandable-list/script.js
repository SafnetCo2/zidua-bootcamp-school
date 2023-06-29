const button = document.querySelector('button');
const div = document.querySelector('div');

button.addEventListener('click', function (event) {
    console.log('Clicked on button');
    event.stopPropagation();
});

div.addEventListener('click', function (event) {
    console.log('Clicked on div');
});