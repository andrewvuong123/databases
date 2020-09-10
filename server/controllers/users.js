var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log('get request of user:')

    // call model's getAll fn
    models.getAll((err, result) => {
      if (err) {
        res.statusCode = 500;
        console.log(err);
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    })


  },
  post: function (req, res) {
    // call model's create
    console.log('post request of user:');
    models.create(newUser, (err, data) => {
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
