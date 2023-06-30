const nextConnect = require("next-connect");
const db = require("./db");

const handler = nextConnect();

handler.use((req, res, next) => {
    // middleware for error handling
    next();
});

handler.get(async (req, res) => {
    try {
        const results = await db.query        
        ("SELECT P.title, P.location, P.capacity, D.view_date, T.view_time FROM Stage_Play_DB.Time T join Performance P on T.performance_key = P.performance_key join Date D on T.date_key = T.date_key = D.date_key");
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default handler;