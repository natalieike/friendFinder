//Dependencies
var express = require("express");
var arouter = express.Router();
var path = require("path");
var friends = require("./data/friends.js");

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:?friends", function(req, res) {
  return res.json(friends);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});


module.exports = hrouter;