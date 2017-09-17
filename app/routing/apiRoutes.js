//Dependencies
var express = require("express");
var arouter = express.Router();
var path = require("path");
var friends = require(path.join(__dirname, "../data/friends.js"));
var bodyParser = require("body-parser");

//Set up parsing
arouter.use(bodyParser.json());
arouter.use(bodyParser.urlencoded({ extended: true }));
arouter.use(bodyParser.text());
arouter.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Returns JSON of all Friends
arouter.get("/api/", function(req, res) {
  return res.json(friends);
});

// Create New Friends - takes in JSON input, returns friend match
arouter.post("/api/new", function(req, res) {
  var newFriend = req.body;
	friends.push(newFriend);
	var friendMatch = findMatch(newFriend);
  res.json(friendMatch);
});

//Finds the friend with the best score match
var friendMatch = function(newFriend){

};

module.exports = arouter;