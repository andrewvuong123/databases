var models = require('../models/users.js');

module.exports = {
  get: function (req, res) {
    console.log('get request of user:')

    // call model's getAll fn
    models.getAll((err, data) => {
      if (err) {
        res.statusCode = 500;
        console.log(err);
      } else {
        res.statusCode = 200;
        res.json(data);
        // res.end(data);
      }
    })


  },
  post: function (req, res) {
    // call model's create
    console.log('post request of user:');
    var params = req.body.username;
    models.create(params, (err, data) => {
      if (err) {
        res.statusCode = 500;
        console.log(err);
      } else {
        res.statusCode = 200;
        // res.write(data);
        // res.end();
      }
    })
  }
};
