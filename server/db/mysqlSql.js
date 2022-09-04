

var mysql = require("mysql")
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "xymai123",
	database: "pingxixi",
})


module.exports  = connection