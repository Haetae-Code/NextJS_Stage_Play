// 공연 예약 insert 
const nextConnect = require("next-connect");
const db = require("./db");
const { opt_checkSearchedWord } = require("../../injectioncode");

const insert = nextConnect();

insert.use((req, res, next) => {
  const { name, phone_number, say_actor, userType, department, identity, selectedTime } = req.body;

  if (
    !opt_checkSearchedWord(name) ||
    !opt_checkSearchedWord(phone_number) ||
    !opt_checkSearchedWord(say_actor) ||
    !opt_checkSearchedWord(userType) ||
    !opt_checkSearchedWord(department) ||
    !opt_checkSearchedWord(identity) ||
    !opt_checkSearchedWord(selectedTime)
  ) {
    res.status(400).json({ message: "Invalid input" });
    return;
  }

  next();
});

insert.post(async (req, res) => {
  try {
    const { performance_key, name, phone_number, say_actor, userType, department, id, identity, selectedTime } = req.body;

    const timeParts = selectedTime.split(' ');
    const hour = parseInt(timeParts[0], 10);
    const minute = parseInt(timeParts[1], 10);
    const Time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:00`;

    const time_key = (await db.query("SELECT time_key FROM Stage_Play_DB.Time WHERE view_time = ? AND performance_key = ?", [Time, performance_key]))[0].time_key;
    
    const audience_key = (await db.query("SELECT COALESCE(MAX(audience_key), 0) + 1 AS audience_key FROM Stage_Play_DB.Audience"))[0].audience_key;

    // insert Student or Outsider
    if (userType === 'student') {
      const insertAudience = "INSERT INTO Stage_Play_DB.Audience (name, phone_number, say_actor) VALUES (?, ?, ?)";
      const insertAudienceValues = [name, phone_number, say_actor];
      
      const insertStudent = "INSERT INTO Stage_Play_DB.Student (audience_key, id, department) VALUES (?, ?, ?)";
      const insertStudentValues = [audience_key, id, department];

      await db.query(insertAudience, insertAudienceValues);
      await db.query(insertStudent, insertStudentValues);
    } else if (userType === 'external') {
      const insertAudience = "INSERT INTO Stage_Play_DB.Audience (audience_key, name, phone_number, say_actor) VALUES (?, ?, ?, ?)";
      const insertAudienceValues = [audience_key, name, phone_number, say_actor];     

      const insertOutsider = "INSERT INTO Stage_Play_DB.Outsider (audience_key, identity) VALUES (?, ?)";
      const insertOutsiderValues = [audience_key, identity];

      await db.query(insertAudience, insertAudienceValues);
      await db.query(insertOutsider, insertOutsiderValues);
    } else {

      res.status(400).json({ message: "Unsupported userType" });
      return;
    }

    // Insert into Reservation table regardless of userType
    const insertReservation = "INSERT INTO Stage_Play_DB.Reservation (audience_key, time_key) VALUES (?, ?)";
    const insertReservationValues = [audience_key, time_key];
    await db.query(insertReservation, insertReservationValues);

    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default insert;
