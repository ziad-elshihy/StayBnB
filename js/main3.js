let ul = document.getElementById("dropUl");
function on() {
   ul.classList.toggle("showMenu");
}


let icon = document.getElementById("icon");
icon.onclick = function() {
   document.body.classList.toggle("darkMode");
   document.getElementById("headerDark").classList.toggle("headerDar");
   document.getElementById("aDark4").classList.toggle("aDar");
   document.getElementById("aDark5").classList.toggle("aDar");
   document.getElementById("aDark6").classList.toggle("aDar");
   ul.classList.toggle("ulDark")
   document.getElementById("inputDark1").classList.toggle("inputDar");
   document.getElementById("inputDark2").classList.toggle("inputDar");
   document.getElementById("inputDark3").classList.toggle("inputDar");
   if(document.body.classList.contains("darkMode")) {
      icon.src = "images/sun.png";
   } else {
      icon.src = "images/moon.png";
   }
}