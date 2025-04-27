document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("formMessage");

    // Simple Email Validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    // Clear the form after successful submission
    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";

    document.getElementById("contactForm").reset();
});
