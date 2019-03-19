//Set up MySql connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "sher123",
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