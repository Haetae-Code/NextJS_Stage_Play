// id에 대한 공연 정보(in the 'Performance' table)
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
            "SELECT * FROM Stage_Play_DB.Performance WHERE performance_key = ?",
            [id]
        );
        console.log("ID : " + id);
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default handler;
