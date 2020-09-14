// model : interact with db
var db = require('../db');

module.exports = {
  // fetch all messages (text, username, roomname, id)
  getAll: function (callback) {
    var sqlQuery = 'SELECT messages.text, messages.id, messages.roomname, user.username FROM messages LEFT OUTER JOIN user ON (messages.userid = user.id)';
    db.query(sqlQuery, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
  // create a message for a user id based on the given username
  create: function (params, callback) {
    var sqlQuery = 'INSERT INTO messages ( text, userid, roomname) VALUE ( ?, (SELECT id from user where username = ? limit 1), ? )';
    db.query(sqlQuery, params, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  }
};
