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
