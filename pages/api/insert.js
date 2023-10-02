const nextConnect = require("next-connect");
const db = require("./db");
const { opt_checkSearchedWord } = require("../../injectioncode");

const insert = nextConnect();

insert.use((req, res, next) => {
  const { name, phone_number, say_actor, userType, department, identity, selectedDate, time } = req.body;

  if (
    !opt_checkSearchedWord(name) ||
    !opt_checkSearchedWord(phone_number) ||
    !opt_checkSearchedWord(say_actor) ||
    !opt_checkSearchedWord(userType) ||
    !opt_checkSearchedWord(department) ||
    !opt_checkSearchedWord(identity) ||
    !opt_checkSearchedWord(selectedDate) ||
    !opt_checkSearchedWord(time) 
  ) {
    res.status(400).json({ message: "Invalid input" });
    return;
  }

  next();
});

async function getTimeKey(performance_key, selectedDate, Time) {
  const query = `
    SELECT T.time_key 
    FROM Stage_Play_DB.Date D 
    JOIN Stage_Play_DB.Time T 
    ON D.date_key = T.date_key 
    WHERE T.performance_key = ? 
      AND D.view_date = ? 
      AND T.view_time = ?
  `;

  const [result] = await db.query(query, [performance_key, selectedDate, Time]);
  return result ? result.time_key : null;
}

async function getAudienceKey() {
  const [result] = await db.query("SELECT COALESCE(MAX(audience_key), 0) + 1 AS audience_key FROM Stage_Play_DB.Audience");
  return result.audience_key;
}

async function insertAudience(name, phone_number, say_actor, userType, department, id, identity) {
  const audience_key = await getAudienceKey();

  if (userType === 'student') {
    const insertAudienceQuery = "INSERT INTO Stage_Play_DB.Audience (name, phone_number, say_actor) VALUES (?, ?, ?)";
    const insertAudienceValues = [name, phone_number, say_actor];
    
    const insertStudentQuery = "INSERT INTO Stage_Play_DB.Student (audience_key, id, department) VALUES (?, ?, ?)";
    const insertStudentValues = [audience_key, id, department];

    await db.query(insertAudienceQuery, insertAudienceValues);
    await db.query(insertStudentQuery, insertStudentValues);
  } else if (userType === 'external') {
    const insertAudienceQuery = "INSERT INTO Stage_Play_DB.Audience (audience_key, name, phone_number, say_actor) VALUES (?, ?, ?, ?)";
    const insertAudienceValues = [audience_key, name, phone_number, say_actor];     

    const insertOutsiderQuery = "INSERT INTO Stage_Play_DB.Outsider (audience_key, identity) VALUES (?, ?)";
    const insertOutsiderValues = [audience_key, identity];

    await db.query(insertAudienceQuery, insertAudienceValues);
    await db.query(insertOutsiderQuery, insertOutsiderValues);
  } else {
    throw new Error("Unsupported userType");
  }

  return audience_key;
}

insert.post(async (req, res) => {
  try {
    const { performance_key, name, phone_number, say_actor, userType, department, id, identity, selectedDate, time } = req.body;

    const Time = getTimeFromInput(time);

    const time_key = await getTimeKey(performance_key, selectedDate, Time);

    if (!time_key) {
      throw new Error("Invalid time");
    }

    const audience_key = await insertAudience(name, phone_number, say_actor, userType, department, id, identity);

    const insertReservationQuery = "INSERT INTO Stage_Play_DB.Reservation (audience_key, time_key) VALUES (?, ?)";
    const insertReservationValues = [audience_key, time_key];
    await db.query(insertReservationQuery, insertReservationValues);

    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

function getTimeFromInput(timeInput) {
  const [hour, minute] = timeInput.split(':');
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:00`;
}

export default insert;
