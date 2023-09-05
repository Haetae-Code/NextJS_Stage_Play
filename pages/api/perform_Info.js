// 모든 공연 정보(key, title, address, image, time, date) in the Performance, Time, Date table
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
            "SELECT P.title, P.location, P.capacity, P.address, P.img_url, D.view_day, T.view_time FROM Stage_Play_DB.Time T join Stage_Play_DB.Performance P on T.performance_key = P.performance_key join Stage_Play_DB.Date D on T.date_key = D.date_key"
        );
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default handler;
