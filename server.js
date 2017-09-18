//Dependencies
var express = require("express");
var path = require("path");

//Set Up Express
var app = express();
var PORT = process.env.PORT || 8000;
/*
var bodyParser = require("body-parser");

//Set up parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
*/
//Route Files
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var router = express.Router();
app.use('/', router); // Mount the router as middleware at path /
app.use(express.static(path.join(__dirname, '/app/public')));
router.all('/api', apiRoutes);
router.post('/api/:new', apiRoutes);
router.get('/', htmlRoutes); //for Home page

//Set up Listening
app.listen(PORT, function(){
	console.log("listening on Port " + PORT);
});