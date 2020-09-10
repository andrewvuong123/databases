var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryStr = "SELECT * FROM users";
    // db.connection.query vs connection.query vs db.query?
    connection.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })


  },
  create: function (newUser, callback) {
    var sql = `INSERT INTO user ( name ) VALUES ( ${newUser})`;
    connection.query(sql, (err) => {
      if (err) {
        console.log('error at create', err);
        callback(err);
      } else {
        console.log('create user success');
        callback(null);
      }
    })
  }
};
