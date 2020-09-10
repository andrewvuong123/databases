// model : talking to db
var db = require('../db');
// ?? db.connection.query
// or
// connection.query

module.exports = {
  //// a function which produces all the messages
  getAll: function (callback) {
    // send query to mysql database asychronously
    connection.query('SELECT * FROM messages', (err, data) => {
      if (err) {
        console.log('error at getAll:', err)
        callback(err);

      } else {
        console.log('getAll success:', data)
        callback(null, data);
      }
    });
  },

  create: function (newMessage, callback) {
    connection.query(`INSERT INTO messages ( id, text, user_id, room_id, date ) VALUES ( 1, ${newMessage}, 1, 1, 2017-06-15)`, (err) => {
      if (err) {
        console.log('error at create:', err)
        callback(err);
      } else {
        console.log('create success:')
        callback(null);
      }
    });
  } // a function which can be used to insert a message into the database
};

