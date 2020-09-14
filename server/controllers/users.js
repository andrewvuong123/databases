var models = require('../models/users.js');

module.exports = {
  get: function (req, res) {
    // call user getAll fn
    models.getAll((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(data);
      }
    });
  },
  post: function (req, res) {
    // call user create
    var user = req.body.username;
    models.create(user, (err, data) => {
      if (err) {
        console.log(err);
        res.status(201).send(err);
      } else {
        res.status(200).end();
      }
    });
  }
};
