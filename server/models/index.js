var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('before query')
      db.query('select * from messages', function (err, rows) {
        if(err){
          console.log("FFUUCKKK");
        }
        console.log("GET: ", rows);
        res.send(rows);
      });
    },
    post: function (message) {
      var newMessage = {};
      newMessage.user = message.username;
      newMessage.msg_text = message.message;
      newMessage.room = message.roomname;
      db.query('insert into messages set ?', newMessage);
    }
  },

  users: {
    get: function () {},
    post: function (user) {
      // console.log(user);
    }
  }
};
