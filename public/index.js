"use strict";
/* global __dirname */

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var port = (process.env.PORT || 10000);
var BASE_API_PATH = "/api/v1";


var app = express();

app.use(bodyParser.json()); //use default json enconding/decoding

app.use(express.static(path.join(__dirname,"public")));

// GET a collection
app.get(BASE_API_PATH + "/data", function (req, res) {
    console.log("INFO: New GET request to /data");
    
    res.send([2,3,4,1,2,7,13,8,4,29,1]);
    
});

app.listen(port, function () {
    console.log("Listening on port " + port);
});
