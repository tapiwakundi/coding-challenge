const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
const { db: posts } = require("./db");

app.get("/", (req, res) => {
  res.json({ message: "Blog Posts API" });
});

// Update this function
app.put("/posts/:id", (req, res) => {});

app.listen(3000, () => console.log("Server is running on port 3000"));
