//Dependencies
var express = require("express");


//Set Up Express
var app = express();
var PORT = process.env.PORT || 8000;

//Route Files
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var router = express.Router();
app.use('/', router); // Mount the router as middleware at path /
router.get('/api', apiRoutes); //for API
router.get('/', htmlRoutes); //for Home page
router.get('/s*', htmlRoutes); //Both alternate paths start with s - style and survey

//Set up Listening
app.listen(PORT, function(){
	console.log("listening on Port " + PORT);
});