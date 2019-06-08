var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {

	connection = mysql.createConnection(process.env.JAWSDB_URL);
   
   } else {
   
	connection = mysql.createConnection({
   
	  host: "localhost",
	  user: "paola",
	  password: "paola12152000",
	  database: "burgers_db"
   
	});
   
   };

connection.connect();   
module.exports = connection;

