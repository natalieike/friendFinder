//Dependencies
var express = require("express");
var path = require("path");

//Set Up Express
var app = express();
var PORT = process.env.PORT || 8000;

//Route Files
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var router = express.Router();
app.use('/', router); // Mount the router as middleware at path 
//Route to apiRoutes file for API routes
router.all('/api', apiRoutes);
router.post('/api/:new', apiRoutes);
//Route to htmlRoutes file for HTML routes
router.all('/', htmlRoutes); 
router.get('/survey', htmlRoutes);
router.get('/style', htmlRoutes);

//Set up Listening
app.listen(PORT, function(){
	console.log("listening on Port " + PORT);
});