

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

let users = [];

// Get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Add a new user
app.post("/api/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
