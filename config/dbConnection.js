var mysql = require('mysql2');

var connMySQL = function(){
	return mysql.createConnection({
		host : '127.0.0.1',
		user : 'root',
		password : 'Repgen2019#',
		database : 'portal_noticias',
		port: 3306
	});
}

module.exports = function () {
	return connMySQL;
}