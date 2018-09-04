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
});


  router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });


  router.put("/:id", function (req, res) {
    var id = req.params.id;

    console.log("id", id);

    burger.update(id, function () {
        res.redirect("/");
    });
    
  });


module.exports = router;
