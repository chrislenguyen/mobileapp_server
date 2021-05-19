const authenticateDAO = require("../DAO/authenticationDAO");

const authenticateDTO = (authData, callback) => {
	authenticateDAO(authData, (err, data) => {
		if (err) {
			return callback({ status: 0, msg: err });
		}
		if (data === undefined) {
			return callback({ status: 0, msg: "NO DATA" });
		}
		callback({ status: 1, data });
	});
};

module.exports = authenticateDTO;
