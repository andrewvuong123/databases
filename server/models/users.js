var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var sql = "SELECT * FROM user";
    db.query(sql, (err, users) => {
      if (err) {
        callback(err);
      } else {
        console.log(users);
        callback(null, users);
      }
    });
  },

  create: function (newUser, callback) {
    var sql = `INSERT INTO user ( username ) VALUES ( '${newUser}' )`;
    db.query(sql, (err) => {
      if (err) {
        console.log('error at create:', err);
        callback(err);
      } else {
        console.log('create user success');
        callback(null);
      }
    });
  }
};
