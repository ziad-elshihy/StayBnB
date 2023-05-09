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

// array of items 

const items = [{
   id: 0,
   title: "Bag 1",
   price: 15,
   img: "img/main7.jpg",
   amount: 1
},
{
   id: 1,
   title: "Bag 2",
   price: 25,
   img: "img/main8.jpg",
   amount: 1
},
{
   id: 2,
   title: "Bag 3",
   price: 10,
   img: "img/main9.jpg",
   amount: 1
},
{
   id: 3,
   title: "Bag 4",
   price: 30,
   img: "img/main10.jpg",
   amount: 1
},
{
   id: 4,
   title: "Bag 5",
   price: 100,
   img: "img/main11.jpg",
   amount: 1
}]

let parentBoxs = document.querySelector('.parent-boxs')
let currentItem = ""

function rednerItems() {
   items.forEach(item => {
      currentItem += ``
      parentBoxs.innerHTML = currentItem
   })
}
rednerItems()