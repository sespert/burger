//Set up MySql connection
var mysql = require("mysql");
//To read and set any environment variables with the dotenv package
require("dotenv").config();

// Set up our connection information
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "sher123",
    database: "burgers_db"
  });



//Export connection so ORM can use it
module.exports = connection;