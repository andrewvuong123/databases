var db = require('../db);

module.exports = {
  get: function (req, res) {
    db.Message.findAll({ include: [db.User]}).then((messages) => {
      res.json(messages);
    });
  },
  post: function (req, res) {
    // create user if not existent or find
    db.User.findOrCreate({ where: {username: req.body.username}}).spread((user, created) => {
      // create message
      db.Message.create({
        userid: user.get('id'),
        text: req.body.message,
        roomname: req.body.roomname;
      }).then((message) => {
        res.sendStatus(200);
      })
    });
  }
};
