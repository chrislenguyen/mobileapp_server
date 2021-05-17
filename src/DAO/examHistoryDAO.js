const executeQuery = require("./commonDAO");
const mysql = require("mysql");
const fs = require("fs");

const examHistoryDAO = ({ pId }, callback) => {
	fs.readFile("src/SQL/examHistory.sql", "utf8", (loadFileErr, query) => {
		if (loadFileErr) {
			return console.log(loadFileErr);
		}
		query = query.replace("&pId", mysql.escape(pId));
		executeQuery(query, (err, data) => {
			if (err) {
				callback(err, undefined);
			} else {
				callback(undefined, data);
			}
		});
	});
};

module.exports = examHistoryDAO;
