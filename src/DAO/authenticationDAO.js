const executeQuery = require("./commonDAO");
const mysql = require("mysql");
const md5 = require("md5");
const fs = require("fs");

const authenticateDAO = ({ username, password }, callback) => {
	const replacer = new RegExp("&username", "g");
	fs.readFile("src/SQL/authentication.sql", "utf8", (loadFileErr, query) => {
		if (loadFileErr) {
			return console.log(loadFileErr);
		}
		query = query.replace(replacer, mysql.escape(username));
		query = query.replace("&password", mysql.escape(md5(password)));
		// console.log(query);
		executeQuery(query, (err, data) => {
			if (err) {
				callback(err, undefined);
			} else {
				callback(undefined, data);
			}
		});
	});
};

module.exports = authenticateDAO;
