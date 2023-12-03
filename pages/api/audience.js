// 공연예약자 선택
const nextConnect = require("next-connect");
const db = require("./db");
const opt_checkSearchedWord = require("../../injectioncode");

const handler = nextConnect();

handler.use((req, res, next) => {
  const { performance_key, selectedDate, selectedTime, time_key } = req.body;

  const isValidInput = [
    performance_key, selectedDate, selectedTime, time_key
  ].every(opt_checkSearchedWord);

  if (!isValidInput) {
    res.status(400).json({ message: "Invalid input" });
    return;
  }

  next();
});

handler.post(async (req, res) => {
  try {
    const { performance_key, selectedDate, selectedTime, time_key } = req.body;

    const audienceKeysResult = await db.query("SELECT audience_key FROM Stage_Play_DB.Reservation WHERE time_key = ?", [time_key]);
    const audienceKeys = audienceKeysResult.map(row => row.audience_key);

    if (audienceKeys.length === 0) {
      res.status(400).json({ message: "Invalid time selection" });
      return;
    }

    const audiences = [];

    for (const audience_key of audienceKeys) {
      const audienceResult = await db.query(`
      SELECT A.audience_key, S.student_key, O.outsider_key, A.name, S.id, S.department, A.phone_number
      FROM Stage_Play_DB.Audience A 
      LEFT JOIN Stage_Play_DB.Student S ON A.audience_key = S.audience_key
      LEFT JOIN Stage_Play_DB.Outsider O ON A.audience_key = O.audience_key
      WHERE A.audience_key = ?;
      `, [audience_key]);

      if (!Array.isArray(audienceResult) || audienceResult.length === 0) {
        console.log("No valid audience data found for audience_key:", audience_key);
        continue; // Skip to the next iteration
      }

      for (const audience of audienceResult) {
        const { audience_key, student_key, outsider_key, name, id, department, phone_number } = audience;
        audiences.push({ audience_key, student_key, outsider_key, name, id, department, phone_number });
      }
    }

    if (audiences.length === 0) {
      res.status(200).json({ message: "No valid audience data found" });
    } else {
      console.log(audience);
      res.status(200).json(audiences);
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default handler;
