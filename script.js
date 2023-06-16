// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form from being submitted
  
    // Get the form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Perform form validation
    if (!name || !email || !message) {
      alert("Please fill out all the fields");
      return;
    }
  
    // Send the form data to the server (you can implement this part)
  
    // Reset the form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  
    alert("Form submitted successfully!");
  }
  
  // Function to display a gallery item when clicked
  function displayItem(event) {
    var item = event.target; // Get the clicked item
    var cakeName = item.querySelector("h3").innerText;
    var cakeDescription = item.querySelector("p").innerText;
  
    alert("Cake Name: " + cakeName + "\nCake Description: " + cakeDescription);
  }
  
  // Attach event listener to the form submission
  var form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
  
  // Attach event listener to gallery items
  var galleryItems = document.querySelectorAll(".cake-item");
  galleryItems.forEach(function (item) {
    item.addEventListener("click", displayItem);
  });
  