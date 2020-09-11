// model : talking to db
var db = require('../db');
// db.query

module.exports = {
  //// a function which produces all the messages
  getAll: function (callback) {
    // send query to mysql database asychronously
    var sqlQuery = 'SELECT text FROM messages'
    db.query(sqlQuery, (err, data) => {
      if (err) {
        console.log('error at getAll:', err)
        callback(err);

      } else {
        console.log('getAll success:', JSON.stringify(data));
        callback(null, JSON.stringify(data));
      }
    });
  },

  create: function (params, callback) {
    var sqlQuery = `INSERT INTO messages ( text, user_id, roomname) VALUES ( ?, ?, ? )`

    db.query(sqlQuery, params, (err) => {
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