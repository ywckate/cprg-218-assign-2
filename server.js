const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission
app.post("/submit-form", (req, res) => {
  const { fname, lname, phone, email } = req.body;
  // Here, you can process the form data, e.g., save it to a database, send it via email, etc.
  console.log("Received form data:", { fname, lname, phone, email });
  // Send a response back to the client
  res.send("Form submitted successfully!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const form = document.getElementById("contact-form");
const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email-address");

form.addEventListener("submit", function (event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});

function validateForm() {
  let isValid = true;

  if (fnameInput.value.trim() === "") {
    showError("fname-error", "First name is required");
    isValid = false;
  } else {
    hideError("fname-error");
  }

  if (lnameInput.value.trim() === "") {
    showError("lname-error", "Last name is required");
    isValid = false;
  } else {
    hideError("lname-error");
  }

  const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  if (!phonePattern.test(phoneInput.value.trim())) {
    showError("phone-error", "Invalid phone number format");
    isValid = false;
  } else {
    hideError("phone-error");
  }

  if (emailInput.value.trim() === "") {
    showError("email-error", "Email address is required");
    isValid = false;
  } else {
    hideError("email-error");
  }

  return isValid;
}

function showError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function hideError(id) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = "";
  errorElement.style.display = "none";
}
