var express = require("express");

var router = express.Router();

//Import the model to use its database functions
var burger = require("../models/burger.js");

//Create routes and set up logic
router.get("/", function(req, res){
	burger.all(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res){
	burger.create([
		req.body.name
	],function(){
		res.redirect("/");
	});
});

router.put("/:id", function(req, res){
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.update(condition, function() {
		res.redirect("/");
	});

});

//Export routes for server.js 
module.exports = router;