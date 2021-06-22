const express = require("express");
const bodyParser = require("body-parser");
const examHistoryDTO = require("./DTO/examHistoryDTO");
const patientBiometricsDTO = require("./DTO/patientBiometricsDTO");
const authenticateDTO = require("./DTO/authenticateDTO");
const patientQueueInfoDTO = require("./DTO/patientQueueInfoDTO");

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

app.get("/auth", (req, res) => {
	authenticateDTO(req.query, (data) => {
		res.send(data);
	});
});

app.get("/get-queue", (req, res) => {
	patientQueueInfoDTO(req.query, (data) => {
		res.send(data);
	});
});

app.listen(port, () => {
	console.log("Server started, port " + port);
});
