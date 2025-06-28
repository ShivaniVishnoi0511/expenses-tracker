const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Load users from file
let users = require("./users.json");

// Register route
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.send("User already exists!");
  }
  users.push({ username, password });
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
  res.send("Registration successful! <a href='login.html'>Login</a>");
});

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.send("Login successful! <a href='dashboard.html'>Go to Dashboard</a>");
  } else {
    res.send("Invalid credentials! <a href='login.html'>Try again</a>");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
