const nextConnect = require("next-connect");
const db = require(".//db_c");

const insert = nextConnect();

insert.use((req, res, next) => {
  next();
});

insert.get(async (req, res) => {
  try {
    const { title, location, capacity } = req.body;

    // 데이터 삽입 쿼리
    const insertQuery = "INSERT INTO Performance (title, location, capacity) VALUES (?, ?, ?)";
    const insertValues = [title, location, capacity];

    // 쿼리 실행
    const result = await db.query(insertQuery, insertValues);

    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default insert;
