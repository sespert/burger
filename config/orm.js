//Import MySql connection
var connection = require("../config/connection");

//Helper function to create question marks for the MySQL queries
function addQuestionMarks(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

//Helper function to convert object values into MySQL syntax
function objToSQL(obj) {
    var arr = [];
    //First, loop through the keys and push the key/value as a string into an array
    for(var key in obj) {
        var value = obj[key];
        //We need to skip hidden properties
        if(Object.hasOwnProperty.call(obj,key)) {
            //If a string has spaces, add quotations
            if (typeof value === "string" && value.indexOf(" ") >=0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    //Transform array of strings to a comma separated string.
    return arr.toString();
};

//Methods that will execute the necessary MySQL commands in the controllers
var orm = {
    //Shows all the burgers in the table
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, function(err,res){
            if (err) throw err;
            cb(res);
        });
    },
    //Inserts one new burger in the table
    insertOne: function(table,cols,vals,cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") VALUES (";
        queryString += addQuestionMarks(vals.length);
        queryString += " )";
    
        connection.query(queryString, vals, function(err,res) {
            if(err) throw err;
            cb(res);
        });
    },
    //Modifies devoured status of a burger in the table
    updateOne: function(table, objColVals, condition,cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSQL(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err,res){
            if (err) throw err;
            cb(res);
        });
    }
}

//Export the orm for the model
module.exports = orm;