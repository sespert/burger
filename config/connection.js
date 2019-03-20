//Set up MySql connection
var mysql = require("mysql");
//To read and set any environment variables with the dotenv package
require("dotenv").config();

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSW,
    database: "burgers_db"
  });

//Make the connection
connection.connect(function(err) {
    if(err){
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
});

//Export connection so ORM can use it
module.exports = connection;