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

// Show thank you message and hide form on submit (for Formspree)
const userDetailsForm = document.getElementById("userDetailsForm");
const thankYouMsg = document.getElementById("thankYouMsg");
if(userDetailsForm) {
  userDetailsForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(userDetailsForm);
    fetch(userDetailsForm.action, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(res => {
      userDetailsForm.style.display = "none";
      thankYouMsg.style.display = "block";
    }).catch(err => {
      alert("Submission failed. Try again.");
    });
  });
}
