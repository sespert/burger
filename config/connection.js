//Set up MySql connection
var mysql = require("mysql");
//To read and set any environment variables with the dotenv package
require("dotenv").config();


//Settings to connect to clearDB so the app can be deployed to heroku
var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-03.cleardb.net",
    user: "b735928627ace3",
    password: "eeba5292",
    database: "heroku_6955d38c9d6a5ef"
})


//Export connection so ORM can use it
module.exports = connection;