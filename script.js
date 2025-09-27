let youtubeClicked = false;
let instaClicked = false;

document.getElementById("youtubeBtn").addEventListener("click", function() {
    youtubeClicked = true;
    // alert("YouTube link clicked! Don't forget to subscribe.");
});

document.getElementById("instaBtn").addEventListener("click", function() {
    instaClicked = true;
    // alert("Instagram link clicked! Don't forget to follow.");
});

document.getElementById("confirmBtn").addEventListener("click", function() {
    if(youtubeClicked && instaClicked){
        document.getElementById("downloadSection").style.display = "block";
        this.style.display = "none";
    } else {
        alert("Please Subscribe YouTube and follow Instagram  before confirming.");
    }
});

// Google Apps Script Web App URL for storing form data
const scriptURL = "https://script.google.com/macros/s/AKfycbzKYVoH9g80e9nTZv8gxwJhVZ3d63JsYDRmYV-D5fiInJbXxiQcKJKsAsmFt0rWTIgy/exec";

// Show thank you message and hide form on submit
const userDetailsForm = document.getElementById("userDetailsForm");
const thankYouMsg = document.getElementById("thankYouMsg");
if(userDetailsForm) {
  userDetailsForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      mobile: document.getElementById("mobile").value
    };
    fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).then(res => {
      userDetailsForm.style.display = "none";
      thankYouMsg.style.display = "block";
    }).catch(err => {
      alert("Submission failed. Try again.");
    });
  });
}
