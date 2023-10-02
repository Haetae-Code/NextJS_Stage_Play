// 공연예약자 선택
const nextConnect = require("next-connect");
const db = require("./db");

const handler = nextConnect();

handler.use((req, res, next) => {
    // middleware for error handling
    const { performance_key, date, time } = req.body;
    console.log(performance_key + date + time);
    const isValidDateFormat = (date) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return dates.match(regex) !== null;
    };
    next();
});

handler.get(async (req, res) => {
    try {
        const { performance_key, date, time } = req.body;
        
        const time_key = await db.query(`
            SELECT T.time_key 
            FROM Stage_Play_DB.Date D 
            JOIN Stage_Play_DB.Time T 
            ON D.date_key = T.date_key 
            WHERE T.performance_key = ? 
              AND D.view_date = ? 
              AND T.view_time = ?
        `, [performance_key, date, time]);
        console.log("time_key", time_key);

        const [audience_key] = await db.query("SELECT audience_key FROM Stage_Play_DB.Reservation WHERE time_key = ?", [time_key]);

        const [Audience] = await db.query(`
            SELECT * 
            FROM Stage_Play_DB.Audience A 
            JOIN Stage_Play_DB.Student S 
            JOIN Stage_Play_DB.Outsider O 
            WHERE A.audience_key = ?
        `, [audience_key]);

        res.status(200).json([Audience]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default handler;
