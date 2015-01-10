var db = require('../db');




module.exports = {
  messages: {
    get: function (req, res) {
      // build a results array to pass back all data
      //   access our database
      db.query('select * from messages', function (err, rows) {
        res.send(rows);
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {

    }
  }
};

