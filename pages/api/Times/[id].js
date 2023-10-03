// 한 공연에 대한 날짜와 시간
const nextConnect = require("next-connect");
const db = require("../db");

const handler = nextConnect();

handler.use((req, res, next) => {
    // middleware for error handling
    next();
});

handler.get(async (req, res) => {
    const { id } = req.query;
    try {
        const results = await db.query(
            "SELECT * FROM Date D join Time T WHERE D.date_key = T.date_key AND T.performance_key = ?;", 
            [id]);
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default handler;