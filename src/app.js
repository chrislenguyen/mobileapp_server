const express = require("express");
const bodyParser = require("body-parser");
const examHistoryDTO = require("./DTO/examHistoryDTO");
const patientBiometricsDTO = require("./DTO/patientBiometricsDTO");

const app = express();
const port = process.env.PORT || 4000;

app.get("/exam-history", (req, res) => {
	examHistoryDTO(req.query, (data) => {
		res.send(data);
	});
});

app.get("/biometrics", (req, res) => {
	patientBiometricsDTO(req.query, (data) => {
		res.send(data);
	});
});

app.listen(port, () => {
	console.log("Server started, port " + port);
});
