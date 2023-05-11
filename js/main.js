let ul = document.getElementById("dropUl");
function on() {
   ul.classList.toggle("showMenu");
}
let icon = document.getElementById("icon");
icon.onclick = function() {
   document.getElementById("search").classList.toggle("searchDark");
   document.body.classList.toggle("darkMode");
   if(document.body.classList.contains("darkMode")) {
      icon.src = "images/sun.png";
   } else {
      icon.src = "images/moon.png";
   }
}
function formValidate() {
   let userName = document.getElementById("userName").value;
   let email = document.getElementById("email").value;
   let phone = document.getElementById("phone").value;
   let textArea = document.getElementById("textArea").value;
   let errors1 = document.getElementById("errors1");
   let errors2 = document.getElementById("errors2");
   let errors3 = document.getElementById("errors3");
   let errors4 = document.getElementById("errors4");
   let text = '';
   if (userName === "" || userName.length < 5) {
      text = "Please Enter Valid Username";
      errors1.innerHTML = text;
      return false;
   }
   errors1.innerHTML = "";
   if (email === "" || email.indexOf("@") == -1) {
      text = "Please Enter Valid Email";
      errors2.innerHTML = text;
      return false;
   }
   errors2.innerHTML = "";
   if (isNaN(phone) || phone.length <= 11 ) {
      text = "Please Enter Valid Phone";
      errors3.innerHTML = text;
      return false;
   }
   errors3.innerHTML = "";
   if (textArea.length < 10) {
      text = "Please Enter Valid Message";
      errors4.innerHTML = text;
      return false;
   }
   else {
      alert("Message sent successfully");
   }
}


