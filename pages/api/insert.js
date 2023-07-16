const nextConnect = require("next-connect");
const db = require("./db");

const insert = nextConnect();

insert.use((req, res, next) => {
  next();
});

insert.post(async (req, res) => {
  try {
    const { name, phone_number, say_actor } = req.body;

    //마지막 adience_key 조회 쿼리
    const selectQuery = "SELECT MAX(adience_key) as lastAdienceKey FROM Stage_Play_DB.Audience";

    const result = await db.query(selectQuery);

    const lastAdienceKey = result[0].lastAdienceKey || 0; // 값이 없을 경우 0으로 초기화

    const adience_key = lastAdienceKey + 1; // 마지막 값에 1을 더해 새로운 adience_key 생성

    // 데이터 삽입 쿼리
    const insertQuery = "INSERT INTO Stage_Play_DB.Audience (adience_key, name, phone_number, say_actor) VALUES (?, ?, ?, ?)";
    const insertValues = [adience_key, name, phone_number, say_actor];

    // 쿼리 실행
    const insertResult = await db.query(insertQuery, insertValues);

    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default insert;