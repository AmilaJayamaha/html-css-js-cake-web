function handleSubmit(event) {
  event.preventDefault();


  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;


  if (!name || !email || !message) {
    alert("Please fill out all the fields");
    return;
  }




  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  alert("Form submitted successfully!");
}


function displayItem(event) {
  var item = event.target;
  var cakeName = item.querySelector("h3").innerText;
  var cakeDescription = item.querySelector("p").innerText;

  alert("Cake Name: " + cakeName + "\nCake Description: " + cakeDescription);
}


var form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);


var galleryItems = document.querySelectorAll(".cake-item");
galleryItems.forEach(function (item) {
  item.addEventListener("click", displayItem);
});
