// model : talking to db
var db = require('../db');
// db.query

module.exports = {
  //// a function which produces all the messages
  getAll: function (callback) {
    // send query to mysql database asychronously
    db.query('SELECT text FROM messages', (err, data) => {
      if (err) {
        console.log('error at getAll:', err)
        callback(err);

      } else {
        console.log('getAll success:', JSON.stringify(data));
        callback(null, JSON.stringify(data));
      }
    });
  },

  create: function (newMessage, callback) {
    db.query(`INSERT INTO messages ( text, user_id, room_id) VALUES ( '${newMessage}', 1, 1)`, (err) => {
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



// module.exports = {
//   getAll, create
// }

// module.exports = {
//   getAll:getAll,
//   create:create
// }