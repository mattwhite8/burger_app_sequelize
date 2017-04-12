var express = require("express");
var router = express.Router();

//Import the model to use its database functions
var db = require("../models");

//Create routes and set up logic
router.get("/", function(req, res){
	db.Burger.findAll({})
	.then(function(result){
		var hbsObject = {
			burgers: result
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res){
	db.Burger.create({
		burger_name: req.body.name
	})
	.then(function(){
		res.redirect("/");
	});
});

router.put("/:id", function(req, res){
	console.log("id", req.params.id);

	db.Burger.update(
	{
		devoured: true
	},
	
	{
		where: {
			id: req.params.id
		}
	})
	.then(function(){
		res.redirect("/");
	});
});

//Export routes for server.js 
module.exports = router;