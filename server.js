var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller");

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

//Start server 
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})
