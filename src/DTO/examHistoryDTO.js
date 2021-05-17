const examHistoryDAO = require("../DAO/examHistoryDAO");

const examHistoryDTO = (pId, callback) => {
	examHistoryDAO(pId, (err, data) => {
		if (err) {
			return callback({ status: 0, msg: err });
		}
		if (data === undefined) {
			return callback({ status: 0, msg: "NO DATA" });
		}
		callback({ status: 1, data });
	});
};

module.exports = examHistoryDTO;
