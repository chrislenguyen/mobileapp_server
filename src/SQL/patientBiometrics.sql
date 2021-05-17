SELECT
    sensors.ID id,
    sensors.SPO2 spo2,
    sensors.Heart_Pulse hPulse,
    sensors.Height height,
    sensors.Weight weight,
    sensors.BMI bmi,
    sensors.Temperature temperature
FROM
    SENSOR_INFORMATION sensors
    INNER JOIN EXAMINATION e ON sensors.ID = e.Sensor_ID
WHERE
    e.Patient_ID = 10
ORDER BY
    e.Exam_Date FOR JSON AUTO