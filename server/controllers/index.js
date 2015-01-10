var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
    // a function which handles a get request for all messages
      models.messages.get( req, res );
    },
    post: function (req, res) {
      // tell model to create new message
      models.messages.post( req.body );
      // console.log(req.body);
    }
  },

  users: {
    get: function (req, res) {
      var result = models.users.get( req );

    },
    post: function (req, res) {
      // tell model to create new user
      models.users.post(req.body);
    }
  }
};

