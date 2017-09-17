//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set Up Express
var app = express();
var PORT = process.env.PORT || 8000;

//Route Files
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

//Set up parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Set up Listening
app.listen(PORT, function(){
	console.log("listening on Port " + PORT);
});