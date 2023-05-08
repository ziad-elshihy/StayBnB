let ul = document.getElementById("dropUl");
function on() {
   ul.classList.toggle("showMenu");
}


let icon = document.getElementById("icon");
icon.onclick = function() {
   document.body.classList.toggle("darkMode");
   document.getElementById("headerDark").classList.toggle("headerDar");
   document.getElementById("h1Dar").classList.toggle("h1Dark");
   document.getElementById("aDark1").classList.toggle("aDar");
   document.getElementById("aDark2").classList.toggle("aDar");
   document.getElementById("aDark3").classList.toggle("aDar");
   ul.classList.toggle("ulDark")
   if(document.body.classList.contains("darkMode")) {
      icon.src = "images/sun.png";
   } else {
      icon.src = "images/moon.png";
   }
}