var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryStr = "SELECT * FROM user";
    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result.toString());
      }
    })
  },
  create: function (newUser, callback) {
    var sql = `INSERT INTO user ( username ) VALUES ( '${newUser}' )`;
    db.query(sql, (err) => {
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
