//var models = require('../models');
var models = require('../models/messages.js');

module.exports = {
  // a function which handles a get request for all messages
  get: function (req, res) {
    // call message getAll() fn
    models.getAll((err, data) => {
      if (err) {
        res.status(201).send(err);
      } else {
        res.status(200).json(data);
      }
    });
  },
  // a function which handles posting a message to the database
  post: function (req, res) {
    // params for sql query
    var params = [req.body.message, req.body.username, req.body.roomname];
    // call models's create()
    models.create(params, (err, data) => {
      if (err) {
        res.status(201).send(err);
      } else {
        res.send(200).end();
      }
    });
  }
};
