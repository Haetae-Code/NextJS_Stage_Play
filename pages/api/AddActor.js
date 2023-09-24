// 배우를 공연에 추가
const nextConnect = require("next-connect");
const db = require("./db");

const handler = nextConnect();

handler.use((req, res, next) => {
    // middleware for error handling
    next();
});

handler.get(async (req, res) => {
    try {
        const { performance_key, actor_key } = req.query;
        
        const results = await db.query("INSERT INTO Stage_Play_DB.Performer (performance_key, actor_key) VALUES (?, ?)"
        , [performnace_key, actor_key]
        );
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default handler;
