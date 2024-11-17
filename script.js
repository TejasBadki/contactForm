function sendEmail() {
    Email.send({
        SecureToken: "67d77368-17a6-4857-8dc1-1546914ed089", // Your secure token
        To: "badkitejas@gmail.com", // Recipient's email address
        From: document.getElementById("email").value, // Sender's email (from form input)
        Subject: "New Contact Form Enquiry",
        Body: `
            Name: ${document.getElementById("name").value} <br>
            Email: ${document.getElementById("email").value} <br>
            Phone No: ${document.getElementById("phone").value} <br>
            Message: ${document.getElementById("message").value}
        `
    }).then(
        message => alert("Your message is " + message) // Success alert
    ).catch(
        error => alert("Failed to send email: " + error) // Error alert
    );
}
