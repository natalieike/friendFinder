//Dependencies
var express = require("express");
var arouter = express();
var path = require("path");
var bodyParser = require("body-parser");
var fs = require("fs");

//Set up parsing
arouter.use(bodyParser.json());
arouter.use(bodyParser.urlencoded({ extended: true }));
arouter.use(bodyParser.text());
arouter.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Returns JSON of all Friends
arouter.get("/api/", function(req, res) {
	fs.readFile(path.join(__dirname, "../data/friends.js"), "utf8", function(err, data){
		if(err){
			return console.log(err);
		}
		var friends = JSON.parse(data.split(","));
  	return res.json(friends);
	});
});

// Create New Friends - takes in JSON input, returns friend match
arouter.post("/api/new", function(req, res) {
	fs.readFile(path.join(__dirname, "../data/friends.js"), "utf8", function(err, data){
		if(err){
			return console.log(err);
		}
		var friends = JSON.parse(data.split(","));
  	var newFriend = req.body;
		var friendMatch = findMatch(newFriend, friends);
		friends.push(newFriend);
		fs.writeFile(path.join(__dirname, "../data/friends.js"), JSON.stringify(friends), function(err){
			if(err){
				return console.log(err);
			}
		});
  	res.json(friendMatch);
	});
});

//Finds the friend with the best score match
var findMatch = function(newFriend, friends){
	var matchScore = newFriend.friendScore;
	var bestMatch = [-1, -1];  //Position 0: index of friend, Position 1: scoreDiff
	for (var i = 0; i < friends.length; i++){
		var scoreDiff = 0;
		var ifriendScore = friends[i].friendScore;
		for (var j = 0; j < ifriendScore.length; j++){
			var diff = Math.abs(ifriendScore[j] - matchScore[j]);
			scoreDiff = scoreDiff + diff;
		}
		if(bestMatch[1] > scoreDiff){
			bestMatch[0] = i;
			bestMatch[1] = scoreDiff;
		}else if(bestMatch[1] === -1){
			bestMatch[0] = i;
			bestMatch[1] = scoreDiff;
		}
	}
	return friends[bestMatch[0]];
};

module.exports = arouter;