var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/webScraper", { useNewUrlParser: true });

// Handlebars 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var routes = require("./controllers/scraperController.js");

// app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
