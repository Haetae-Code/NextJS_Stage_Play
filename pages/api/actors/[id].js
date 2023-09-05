// id를 통한 배우정보
const nextConnect = require("next-connect");
const db = require("../db");

const handler = nextConnect();

handler.use((req, res, next) => {
    next();
});

handler.get(async (req, res) => {
    const { id } = req.query;

    try {
        const results = await db.query(
            "SELECT * FROM Stage_Play_DB.Actor WHERE actor_key = ?",
            [id]
        );
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default handler;
