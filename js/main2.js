let ul = document.getElementById("dropUl");
function on() {
   ul.classList.toggle("showMenu");
}
let icon = document.getElementById("icon");
icon.onclick = function () {
   document.body.classList.toggle("darkMode");
   document.getElementById("headerDark").classList.toggle("headerDar");
   document.getElementById("h1Dar").classList.toggle("h1Dark");
   document.getElementById("aDark1").classList.toggle("aDar");
   document.getElementById("aDark2").classList.toggle("aDar");
   document.getElementById("aDark3").classList.toggle("aDar");
   ul.classList.toggle("ulDark")
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
// array of items 
const items = [{
   id: 0,
   title: "Private Villa in San Francisco",
   title1: "Deluxe Queen Room With Street View",
   title2: "1 Bedroom / 1 Bathroom / Wifi / Kitchen",
   title3: "2 Guest",
   title4: "$100 / ",
   title5: "day",
   img: "./images/house-5.png",
   date: new Date('2022-02-01')
},
{
   id: 1,
   title: "Private Villa in San Francisco",
   title1: "Deluxe Queen Room With Street View",
   title2: "1 Bedroom / 1 Bathroom / Wifi / Kitchen",
   title3: "2 Guest",
   title4: "$100 / ",
   title5: "day",
   img: "./images/house-1.png",
   date: new Date('2019-10-01')
},
{
   id: 2,
   title: "Private Villa in San Francisco",
   title1: "Deluxe Queen Room With Street View",
   title2: "1 Bedroom / 1 Bathroom / Wifi / Kitchen",
   title3: "2 Guest",
   title4: "$100 / ",
   title5: "day",
   img: "./images/house-2.png",
   date: new Date('2021-05-01')
},
{
   id: 3,
   title: "Private Villa in San Francisco",
   title1: "Deluxe Queen Room With Street View",
   title2: "1 Bedroom / 1 Bathroom / Wifi / Kitchen",
   title3: "2 Guest",
   title4: "$100 / ",
   title5: "day",
   img: "./images/house-3.png",
   date: new Date('2020-01-01')
},
{
   id: 4,
   title: "Private Villa in San Francisco",
   title1: "Deluxe Queen Room With Street View",
   title2: "1 Bedroom / 1 Bathroom / Wifi / Kitchen",
   title3: "2 Guest",
   title4: "$100 / ",
   title5: "day",
   img: "./images/house-4.png",
   date: new Date('2023-05-09')
}]
const filteredItems = items.filter(item => item.date).sort((a, b) => b.date - a.date);
let rooms = document.querySelector(".rooms")
let currentItem = ""
function renderItems() {
   filteredItems.forEach(item => {
      currentItem += `
      <div class="room">
      <div class="image">
         <a href="./index3.html"><img src="${item.img}"></a>
      </div>
      <div class="content">
         <h6 class="fs-6">${item.title}</h6>
         <h3 class="fs-5 fw-bold">${item.title1}</h3>
         <h6 class="fs-6">${item.title2}</h6>
         <div class="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>
         </div>
         <div class="price">
            <h6>${item.title3}</h6>
            <p>${item.title4}<span>${item.title5}</p>
         </div>
      </div>
   </div>`
      rooms.innerHTML = currentItem
   })
}
renderItems()