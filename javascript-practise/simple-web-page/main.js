       const result = document.getElementById("result");
       const upper = document.getElementById("upper");
       const hello = document.getElementById("Helo").innerHTML="Hello World";
       const cartButton = document.getElementById("btn");


    //    function changeImage() {
    //       var image = document.getElementById("image");
         
    //       if (image.src ==           "https://images.unsplash.com/photo-1686343916755-9b411972c06e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60") {
    //          image.src = "https://images.unsplash.com/photo-1675426513962-1db7e4c707c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
    //          result.innerHTML += " Hello world changed image. ";
    //       }
    //    }
    result.addEventListener("click", function () {
  cartButton.innerHTML= "Hello world";
//   itemTag.style.backgroundColor = "red";
  imageCard.style.backgroundImage = 'url(" image.src = "https://images.unsplash.com/photo-1675426513962-1db7e4c707c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";")';
});