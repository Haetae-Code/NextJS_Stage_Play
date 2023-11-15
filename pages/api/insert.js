//공연예약 insert
const nextConnect = require("next-connect");
const db = require("./db");
const opt_checkSearchedWord  = require("../../injectioncode");

const insert = nextConnect();

insert.use(async (req, res, next) => {
  try {
    const { performance_key, name, phone_number, say_actor, userType, department, 
      studentID, identity, selectedDate, selectedTime, time_key } = req.body;

    console.log("Reservation: " +
                performance_key, name, phone_number, 
                say_actor, userType, department, studentID, 
                identity, selectedDate, selectedTime, time_key);

    const isValidInput = [
      performance_key, name, phone_number, say_actor, userType, department, 
      studentID, identity, selectedDate, selectedTime
    ].every(opt_checkSearchedWord);

    if (!isValidInput) {
      res.status(400).json({ message: "Invalid input" });
      return;
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

async function getAudienceKey() {
  const [result] = await db.query("SELECT COALESCE(MAX(audience_key), 0) + 1 AS audience_key FROM Stage_Play_DB.Audience;");
  return result.audience_key;
}

async function insertAudience(name, phone_number, say_actor, userType, department, studentID, identity) {
  const audience_key = await getAudienceKey();
  if (userType === 'student') {
    const insertAudienceQuery = "INSERT INTO Stage_Play_DB.Audience (name, phone_number, say_actor) VALUES (?, ?, ?)";
    const insertAudienceValues = [name, phone_number, say_actor];
    
    const insertStudentQuery = "INSERT INTO Stage_Play_DB.Student (audience_key, id, department) VALUES (?, ?, ?)";
    const insertStudentValues = [audience_key, studentID, department];

    await db.query(insertAudienceQuery, insertAudienceValues);
    await db.query(insertStudentQuery, insertStudentValues);
  } else if (userType === 'outsider') {
    const insertAudienceQuery = "INSERT INTO Stage_Play_DB.Audience (audience_key, name, phone_number, say_actor) VALUES (?, ?, ?, ?)";
    const insertAudienceValues = [audience_key, name, phone_number, say_actor];     

    const insertOutsiderQuery = "INSERT INTO Stage_Play_DB.Outsider (audience_key, identity) VALUES (?, ?)";
    const insertOutsiderValues = [audience_key, identity];

    await db.query(insertAudienceQuery, insertAudienceValues);
    await db.query(insertOutsiderQuery, insertOutsiderValues);
  } else {
    throw new Error("Unsupported userType");
    return;
  }

  return audience_key;
}

insert.post(async (req, res) => {
  let transaction;
  try {
    transaction = await db.beginTransaction();

    const { performance_key, name, phone_number, say_actor, userType, department, studentID, identity, selectedDate, selectedTime, time_key } = req.body;

    console.log("time_key:", time_key);

    const audience_key = await insertAudience(name, phone_number, say_actor, userType, department, studentID, identity);

    const insertReservationQuery = "INSERT INTO Stage_Play_DB.Reservation (audience_key, time_key) VALUES (?, ?)";
    const insertReservationValues = [audience_key, time_key];
    console.log("Inserting reservation data:", insertReservationValues);
    await db.query(insertReservationQuery, insertReservationValues);

    await db.commit(transaction);

    const audienceResult = await db.query(`
        SELECT A.audience_key, S.student_key, O.outsider_key, A.name, S.id, S.department, A.phone_number
        FROM Stage_Play_DB.Audience A 
        JOIN Stage_Play_DB.Student S ON A.audience_key = S.audience_key
        JOIN Stage_Play_DB.Outsider O ON A.audience_key = O.audience_key
        WHERE A.audience_key = ?
      `, [audience_key]);
    console.log(audienceResult);
    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    if (transaction) {
      await db.rollback(transaction);
    }
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default insert;