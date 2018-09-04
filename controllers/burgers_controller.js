var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");


// Routes set up

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });

  router.post("/api/burgers", function(req, res) {
    cat.create([
      "burger_name"
    ], [
      req.body.name, req.body.sleepy
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
});
module.exports = router;
