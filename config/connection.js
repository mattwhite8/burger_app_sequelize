//Set up MySQL Connection
var mysql = require("mysql");

var connection = mysql.createPool({
	host: 'us-cdbr-iron-east-03.cleardb.net',
	user: 'bcc9817ed1b507',
	password: '7ec12bb0',
	database: 'heroku_48cafc7938d6e60'
});

//Make connection 
connection.getConnection(function(err, result) {
	if (err) {
		console.error("error connecting: " + err.stack);
		connection.release();
		return;
	}
	result.connect();
	console.log("connected as id " + connection.threadID);
});

//Export connection for ORM to use
module.exports = connection;