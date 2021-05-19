SELECT
    Patient_ID pId,
    First_Name fname,
    Last_Name lname,
    Date_Of_Birth dob,
    Gender gender,
    Address address,
    Phone_Number phoneNo,
    SSN ssn,
    [User_Name] username,
    E_Mail email
FROM
    PATIENT
WHERE
    (
        [User_Name] = &username
        OR E_Mail = &username
    )
    AND [Password] = &password FOR JSON AUTO