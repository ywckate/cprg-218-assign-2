const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit-form", (req, res) => {
  const { fname, lname, phone, email } = req.body;

  console.log("Received form data:", { fname, lname, phone, email });

  res.send("Form submitted successfully!");
});
app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/success.html");
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
