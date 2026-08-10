const form = document.getElementById("feedbackForm");

// Get the message paragraph
const message = document.getElementById("message");

const rating = document.getElementById("rating");
const feedbackSection = document.getElementById("feedbackSection");

rating.addEventListener("change", function () {

    if (rating.value === "") {
        feedbackSection.style.display = "none";
        return;
    }

    feedbackSection.style.display = "block";

    // Ratings 1 or 2
    if (rating.value === "1 - Poor⭐"  || rating.value === "2 - Fair⭐⭐") {
        feedbackLabel.textContent = "How can we improve?";
        feedback.placeholder = "Tell us what went wrong and how we can do better...";
    }
    // Ratings 3, 4 or 5
    else {
        feedbackLabel.textContent = "What did you like?";
        feedback.placeholder = "Tell us what you enjoyed about your experience...";
    }

});
// Run when the form is submitted
form.addEventListener("submit", function(event){

    // Stop page refresh
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const rating = document.getElementById("rating").value;
    const feedback = document.getElementById("feedback").value.trim();

    // Check if any field is empty
    if(name === "" || email === ""  || rating === ""  ||feedback === ""){
        alert("Please fill in all fields.");
        return;
    }

    // Show success message
    message.textContent = "Thank you! Your feedback has been submitted.";

    // Clear the form
    form.reset();
});
