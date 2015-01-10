var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.query('select * from messages', function (err, rows) {

        if(err){ console.log(err); }

        var resultsObj = { 'results' : rows.reverse() };
        res.send(resultsObj);
        console.log(resultsObj);
      });
    },
    post: function (message) {
      // var newMessage = {};
      // newMessage.user = message.username;
      // newMessage.msg_text = message.message;
      // newMessage.room = message.roomname;
      // db.query('insert into messages set ?', newMessage);
      db.query('insert into messages set ?', message);
    }
  },

  users: {
    get: function () {},
    post: function (user) {
      // console.log(user);
    }
  }
};
