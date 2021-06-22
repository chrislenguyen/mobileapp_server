const patientQueueInfoDAO = require("../DAO/patientQueueInfoDAO");

const patientQueueInfoDTO = (pId, callback) => {
	patientQueueInfoDAO(pId, (err, data) => {
		if (err) {
			return callback({ status: 0, msg: err });
		}
		if (data === undefined) {
			return callback({ status: 0, msg: "NO DATA" });
		}
		callback({ status: 1, data });
	});
};

module.exports = patientQueueInfoDTO;
