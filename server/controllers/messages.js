//var models = require('../models');
var modelsMsg = require('../models/messages.js');

// where get() will get called? router or client ajax get req?
module.exports = {
  get: function (req, res) {  // a function which handles a get request for all messages
    console.log('get request of messages in controller:')
    // call models's getAll() fn
    modelsMsg.getAll((err, data) => {
      if (err) {
        res.statusCode = 500;
        console.log(err);
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  },

  post: function (req, res) { // a function which handles posting a message to the database
    // call models's create()
    console.log('post request of message in controller: req.query', req.query);
    console.log('post request of message in controller: req.query.message', req.query.message);
    console.log('post request of message in controller: req.json', req.json);
    // console.log('post request of message in controller: req.body', req.body);
    // console.log('post request of message in controller: req.body.message', req.body.message);
    // console.log('post request of message in controller: req.params', req.params);
    var newMessage = req.query.message;
    modelsMsg.create(newMessage, (err, data) => {
    // modelsMsg.create(newMessage, (err, data) => {
      if (err) {
        res.statusCode = 500;
        console.log(err);
      } else {
        res.statusCode = 200;
        console.log('post of message success')
        // res.write(data);
        res.end();
      }
    })

  }
};
