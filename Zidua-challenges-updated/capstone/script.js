//navabar
window.onload = function(){
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];
  
  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });
  };







//form

//submit a form by















    //footer last updated
    document.querySelector(
      "#Last-updated"
  ).textContent = `Last-updated: ${document.lastModified}`;