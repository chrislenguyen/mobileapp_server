SELECT
    Patient_ID pId,
    Building_Code bCd,
    STT pOrder,
    curPatientSTT = (
        SELECT
            MIN(STT)
        FROM
            QUEUE_EXAMINATION
    ),
    Exam_Room_Code roomCd
FROM
    QUEUE_EXAMINATION
WHERE
    Patient_ID = &pId FOR JSON AUTO;