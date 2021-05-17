const executeQuery = require("./commonDAO");
const mysql = require("mysql");
const fs = require("fs");

const patientBiometricsDAO = ({ pId }, callback) => {
	fs.readFile(
		"src/SQL/patientBiometrics.sql",
		"utf8",
		(loadFileErr, query) => {
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
		}
	);
};

module.exports = patientBiometricsDAO;
