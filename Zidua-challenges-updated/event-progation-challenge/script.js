const list = document .getElementById('#book-list ul');
list.addEventListener('click', function(event){
    if(event.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});