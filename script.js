// Show alert when button is clicked
function showMessage() {
    alert("Thank you for your interest! We will contact you soon.");
}

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent. We will get back to you soon.");
});