//Set up MySql connection
var mysql = require("mysql");
//To read and set any environment variables with the dotenv package
require("dotenv").config();

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSW,
    database: "burgers_db"
  })
}



//Export connection so ORM can use it
module.exports = connection;