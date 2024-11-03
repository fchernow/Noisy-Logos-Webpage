// JavaScript to handle the trust survey form submission and log responses

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("trust-survey-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const trustValue = document.getElementById("trust").value;
        const reasonValue = document.getElementById("reason").value;

        // Log the responses (In real testing, this could be sent to a backend server)
        console.log("Trust response: ", trustValue);
        if (trustValue === "no") {
            console.log("Reason for distrust: ", reasonValue);
        }

        // Provide feedback to the user
        alert("Thank you for your response!");

        // Clear the form
        form.reset();
    });
});
