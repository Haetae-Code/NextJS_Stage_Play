// 모든 공연 날짜과 시간 선택
const nextConnect = require("next-connect");
const db = require("./db");

const handler = nextConnect();

handler.use((req, res, next) => {
    // middleware for error handling
    next();
});

handler.get(async (req, res) => {
    try {
        const results = await db.query(
            "SELECT * FROM Stage_Play_DB.Date D join Stage_Play_DB.Time T WHERE D.date_key = T.date_key;", 
            [id]);
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default handler;
