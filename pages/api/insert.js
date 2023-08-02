const nextConnect = require("next-connect");
const db = require("./db");

const insert = nextConnect();

insert.use((req, res, next) => {
  next();
});

insert.post(async (req, res) => {
  try {
    const { name, phone_number, say_actor, userType, department, id, identity, time_key } = req.body;
    
    const audience_key = (await db.query("SELECT COALESCE(MAX(audience_key), 0) + 1 AS audience_key FROM Stage_Play_DB.Audience"))[0].audience_key;

    // insert Student or Outsider
    if (userType === 'student') {
      const student_key = (await db.query("SELECT COALESCE(MAX(student_key), 0) + 1 AS student_key FROM Stage_Play_DB.Student"))[0].student_key;

      const insertAudience = "INSERT INTO Stage_Play_DB.Audience (audience_key, name, phone_number, say_actor) VALUES (?, ?, ?, ?)";
      const insertAudienceValues = [audience_key, name, phone_number, say_actor];

      const insertStudent = "INSERT INTO Stage_Play_DB.Student (student_key, audience_key, id, department) VALUES (?, ?, ?, ?)";
      const insertStudentValues = [student_key, student_key, id, department];

      await db.query(insertAudience, insertAudienceValues);
      await db.query(insertStudent, insertStudentValues);
    } else if (userType === 'external') {
      const outsider_key = (await db.query("SELECT COALESCE(MAX(outsider_key), 0) + 1 AS outsider_key FROM Stage_Play_DB.Outsider"))[0].outsider_key;

      const insertAudience = "INSERT INTO Stage_Play_DB.Audience (audience_key, name, phone_number, say_actor) VALUES (?, ?, ?, ?)";
      const insertAudienceValues = [audience_key, name, phone_number, say_actor];

      const insertOutsider = "INSERT INTO Stage_Play_DB.Outsider (outsider_key, audience_key, identity) VALUES (?, ?, ?)";
      const insertOutsiderValues = [outsider_key, outsider_key, identity];

      await db.query(insertAudience, insertAudienceValues);
      await db.query(insertOutsider, insertOutsiderValues);
    } else {

      res.status(400).json({ message: "Unsupported userType" });
      return;
    }

    // Insert into Reservation table regardless of userType
    const insertReservation = "INSERT INTO Stage_Play_DB.Reservation (audience_key, time_key) VALUES (?, ?)";
    const insertReservationValues = [userType === 'student' ? student_key : outsider_key, time_key];
    await db.query(insertReservation, insertReservationValues);

    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default insert;
