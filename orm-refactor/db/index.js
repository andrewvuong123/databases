// refactor using sequelize
var Sequelize = require('sequelize');

// create db, takes in name, username, password
var db = new Sequelize('chat', 'root', '');

// define data structures
var User = db.define('User', {
  username: Sequelize.STRING
});

var Message = db.define('Message', {
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});

// establishes userid col on message instances
Message.belongsTo(User);
// establish bi-directional association between user/messages
User.hasMany(Message);

// create sql tables
User.sync();
Message.sync();

// export for use
exports.User = User;
exports.Message = Message;