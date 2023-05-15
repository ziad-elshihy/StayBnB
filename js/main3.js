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
   if (document.body.classList.contains("darkMode")) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      icon.style.color="yellow"
   } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');   
      icon.style.color="black"
   }
}
function showTime() {
   let date = new Date();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   if (hours > 12) {
      hours = hours - 12
   }
   if (minutes < 10) {
      minutes = `0${minutes}`
   }
   if (seconds < 10) {
      seconds = `0${seconds}`
   }
   let clock = `<span class="text-white bg-dark p-1">Time:</span> ${hours}:${minutes}:${seconds}`;
   document.getElementById("time").innerHTML = clock;
   setTimeout(showTime , 1000);
}