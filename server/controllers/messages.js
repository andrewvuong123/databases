var models = require('../models');

// where get() will get called? router or client ajax get req?
module.exports = {
  get: function (req, res) {  // a function which handles a get request for all messages
    console.log('get request of messages in controller:')
    // call models's getAll() fn
    models.getAll((err, data) => {
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
    console.log('post request of message in controller:')
    models.create(newMessage,(err, data) => {
      if (err) {
        res.statusCode = 500;
        console.log(err);
      } else {
        res.statusCode = 200;
        res.write(data);
        res.end();
      }
    })

  }
};
