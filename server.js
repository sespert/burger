var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller");
var connection = require("./config/connection");

var app = express();

//Set the port
var PORT = process.env.PORT || 3030;

//Set static content from the "public" directory
app.use(express.static("public"));

//Parse application body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Set handlebars route
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Use routes
app.use(routes);

//We need to connect to the database first and then open the port so when 
//we call the get method the database is already up
connection.connect(function(err) {
    if(err){
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
    //Start server 
    app.listen(PORT, function() {
        console.log("Server listening on: http://localhost:" + PORT);
    })
});

