var db = require('../db);

module.exports = {
  get: function (req, res) {
    db.User.findAll().then((users) => {
      res.json(users);
    });
  },
  post: function (req, res) {
    var user = req.body.username;
    db.User.findOrCreate({ where: {username: user}}).spread((user, created) => {
      res.sendStatus(created ? 201 : 200);
    });
  }
};

