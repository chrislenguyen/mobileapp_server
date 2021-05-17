const patientBiometricsDAO = require("../DAO/patientBiometricsDAO");

const patientBiometricsDTO = (pId, callback) => {
	patientBiometricsDAO(pId, (err, data) => {
		if (err) {
			return callback({ status: 0, msg: err });
		}
		if (data === undefined) {
			return callback({ status: 0, msg: "NO DATA" });
		}
		callback({ status: 1, data });
	});
};

module.exports = patientBiometricsDTO;
