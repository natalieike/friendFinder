//Dependencies
var express = require("express");
var hrouter = express.Router();
var path = require("path");

//Route to Home page
hrouter.get("/", function(req, res) {
 	res.sendFile(path.join(__dirname, "../public/home.html"));
});

//Route CSS
hrouter.get("/style", function(req, res) {
 	res.sendFile(path.join(__dirname, "../public/style.css"));
});

//Route to Survey page
hrouter.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});
	
module.exports = hrouter;