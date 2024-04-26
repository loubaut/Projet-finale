document.addEventListener('DOMContentLoaded', function() {
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }

  const themeToggle = document.querySelector('#theme-toggle');
  themeToggle.addEventListener('click', toggleTheme);
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById('id01');

window.onclick = function(event) {
   if (event.target == modal ){
    model.style.display = "none";
   }
  }

  var i = 0;
  var txt = 'Beinvenu sur noter platforme de vente NFT veuillez mettre votre carte bleu !'; 
  var speed = 50; /* The speed/duration of the effect in milliseconds */
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
