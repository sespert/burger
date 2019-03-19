//Import the orm to create the functions needed to interact with the database
var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols,vals, function(res) {
            cb(res)
        });
    },
    updateOne: function(objColVals, condition,cb) {
        orm.updateOne("burgers", objColVals,condition, function(res){
            cb(res);
        })
    }
};

//Exports the model to the controller
module.exports = burger;

