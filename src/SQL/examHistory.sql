SELECT
    exs.exId,
    examDate,
    nextExamDate,
    diagnosis,
    bmi,
    hPulse,
    height,
    spo2,
    temperature,
    weight,
    hosName,
    medName,
    medQuantity,
    medDes
FROM
    (
        SELECT
            examination.Exam_ID exId,
            examination.Exam_Date examDate,
            examination.Next_Exam_Date nextExamDate,
            examination.Diagnosis diagnosis,
            sensor_info.BMI bmi,
            sensor_info.Heart_Pulse hPulse,
            sensor_info.Height height,
            sensor_info.SPO2 spo2,
            sensor_info.Temperature temperature,
            sensor_info.Weight weight,
            hospital.Hospital_Name hosName
        FROM
            EXAMINATION examination
            LEFT JOIN SENSOR_INFORMATION sensor_info ON examination.Sensor_ID = sensor_info.ID
            LEFT JOIN HOSPITAL hospital ON examination.Hospital_ID = hospital.Hospital_ID
        WHERE
            examination.Patient_ID = &pId
    ) AS exs
    LEFT JOIN (
        SELECT
            med.Exam_ID exId,
            med.Med_Name medName,
            med.Amount medQuantity,
            med.Description medDes
        FROM
            MEDICATION med
    ) AS med ON med.exId = exS.exId
ORDER BY
    examDate FOR JSON AUTO;