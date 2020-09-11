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
        // res.end(data);
        res.json(data);
        // res.end();
      }
    });
  },

  post: function (req, res) { // a function which handles posting a message to the database
    // call models's create()
    // console.log('post request of message in controller: req.query', req.query);
    console.log('post request of message in controller: req.body', req.body); // when we send message in postman => select body , json format, {key : value}
    var params = [req.body.message, req.body.username, req.body.roomname] ;
    modelsMsg.create(params, (err, data) => {
    // modelsMsg.create(newMessage, (err, data) => {
      if (err) {
        res.statusCode = 500;
        console.log(err);
      } else {
        res.statusCode = 200;
        console.log('post of message success')
        // // res.write(data);
        // res.end();
      }
    })
  }
};
