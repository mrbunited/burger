var connection = require("./connection.js");

var orm = {

    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
      });
  },

  create: function (burger, cb) {
      var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
      connection.query(queryString, [burger], function (err, result) {
          if (err) {
              throw err;
          }
          cb(result);
      });
  },

  update: function (id, cb) {
      var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";

      connection.query(queryString, [id], function (err, result) {
          if (err) {
              throw err;
          }
          cb(result);
      });
  }
};


// Export the orm object for the model (cat.js).
module.exports = orm;