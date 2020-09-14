var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});
// now server connected to mysql
connection.connect();


module.exports = connection;  //<= exporting whole obj



