//Import express
var express = require("express");
var router = express.Router();
//Import the model to use the database functions
var burger = require("../models/burger");

//Create route to show all burgers
router.get("/", function(req,res){
    burger.selectAll(function(data){        
        //Display objects in html thru handlebar index
        res.render("index", { burgers: data});
    });
});

//Create route to insert new burger
router.post("/api/burgers", function(req,res){
    burger.insertOne([
        "burger_name", "devoured"
    ],[
        req.body.burger_name, 0
    ], function(result) {
        //Send back ID of new burger
        res.json({id:result.insertId});
    });
});

//Create route to update a burger
router.put("/api/burgers/:id", function(req,res){
    //Grab id of burger to be updated
    var condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: 1
    }, condition, function(result) {
        //If no rows are modified then the ID don't exist
        if(result.changedRows == 0) {
            return res.status(400).end();
        } else {
            res.status(200).end();
        }
    })
});

//Exports routes to be used by server
module.exports = router;