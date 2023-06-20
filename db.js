const { Post } = require("./Post");

const db = [
  new Post(1, "First Post", "This is the first post.", ["node", "express"]),
  new Post(2, "Second Post", "This is the second post.", [
    "javascript",
    "backend",
  ]),
];

module.exports = { db };
