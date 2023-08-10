const nextConnect = require("next-connect");
const db = require("./db");

const handler = nextConnect();

handler.use((req, res, next) => {
    next();
});

// delete Actor
handler.delete(async (req, res) => {
    try {    
        const { actor_key } = req.body;

        const results = await db.query(
            "DELETE FROM Stage_Play_DB.Actor WHERE actor_key = ?",
            [actor_key]
        );
        res.status(200).json({ message: "Actor deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// insert Actor
handler.post(async (req, res) => {
    try {
        const { name, department, introduction } = req.body;

        const InsertActor = "INSERT INTO Stage_Play_DB.Actor (name, department, introduction) VALUES (?, ?, ?)";
        const InsertActorValues = [name, department, introduction];

        await db.query(InsertActor, InsertActorValues);

        res.status(200).json({ message: "Actor inserted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// update Actor
handler.put(async (req, res) => {
    try {
        const { actor_key, name, department, introduction } = req.body;

        const results = await db.query(
            "UPDATE Stage_Play_DB.Actor SET name = ?, department = ?, introduction = ? WHERE actor_key = ?", 
            [name, department, introduction, actor_key]
        );
        
        res.status(200).json({ message: "Actor updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default handler;

