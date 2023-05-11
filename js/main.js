let ul = document.getElementById("dropUl");
function on() {
   ul.classList.toggle("showMenu");
}
let icon = document.getElementById("icon");
icon.onclick = function () {
   document.getElementById("search").classList.toggle("searchDark");
   document.body.classList.toggle("darkMode");
   if (document.body.classList.contains("darkMode")) {
      icon.src = "images/sun.png";
   } else {
      icon.src = "images/moon.png";
   }
}

function sendMail() {
   const info = {
      userName: document.getElementById("userName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
   };

   const serviceID = "service_jzc67tq";
   const templateID = "template_4stpdhw";

   emailjs.send(serviceID, templateID, info)
      .then(res => {
         document.getElementById("userName").value = "";
         document.getElementById("email").value = "";
         document.getElementById("phone").value = "";
         document.getElementById("message").value = "";
         let errors1 = document.getElementById("errors1");
         let errors2 = document.getElementById("errors2");
         let errors3 = document.getElementById("errors3");
         let errors4 = document.getElementById("errors4");
         let text = '';
         if (info.userName === "" || info.userName.length < 5) {
            text = "Please Enter Valid Username";
            errors1.innerHTML = text;
            return false;
         }
         errors1.innerHTML = "";
         if (info.email === "" || info.email.indexOf("@") == -1) {
            text = "Please Enter Valid Email (at least 5 characters).";
            errors2.innerHTML = text;
            return false;
         }
         errors2.innerHTML = "";
         if (isNaN(info.phone) || info.phone.length <= 11) {
            text = "Please Enter Valid Phone";
            errors3.innerHTML = text;
            return false;
         }
         errors3.innerHTML = "";
         if (info.message.length < 10) {
            text = "Please Enter Valid Message (at least 10 characters).";
            errors4.innerHTML = text;
            return false;
         }
         else {
            alert("Your message has been sent successfully!!");
         }
      })
      .catch(err => console.log(err));
}