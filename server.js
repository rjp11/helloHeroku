var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routing/apiRoute")(app);
require("./routing/htmlRoute")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});