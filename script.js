let ul = document.getElementById("dropUl")
let bars = document.getElementById("bars")
let close = document.getElementById("close")

bars.addEventListener("click" , function() {
   ul.style.opacity = "1"
   ul.style.zIndex = "100"
   bars.style.display = "none"
   close.style.display = "block"
})


close.addEventListener("click" , function() {
   ul.style.opacity = "0"
   ul.style.zIndex = "-1"
   bars.style.display = "block"
   close.style.display = "none"
})