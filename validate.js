document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");
        const errorMessages = [];

        if (name.value === "") {
            errorMessages.push("Name is required");
        }

        if (email.value === "") {
            errorMessages.push("Email is required");
        } else if (!isValidEmail(email.value)) {
            errorMessages.push("Invalid email address");
        }

        if (subject.value === "") {
            errorMessages.push("Subject is required");
        }

        if (message.value === "") {
            errorMessages.push("Message is required");
        }

        if (errorMessages.length > 0) {
            event.preventDefault(); // Prevent form submission
            displayErrors(errorMessages);
        }
    });

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function displayErrors(errors) {
        const errorMessageContainer = document.getElementById("error-messages");
        errorMessageContainer.innerHTML = ""; // Clear previous error messages

        errors.forEach(function(error) {
            const errorMessage = document.createElement("p");
            errorMessage.textContent = error;
            errorMessageContainer.appendChild(errorMessage);
        });
    }
});
