// 배우 추가&편집&삭제
const nextConnect = require("next-connect");
const db = require("./db");
const { opt_checkSearchedWord } = require("../../injectioncode");

const handler = nextConnect();

handler.use((req, res, next) => {
    const { title, location, period, time, address, run_time, capacity, rules } = req.body;

    if (
      !opt_checkSearchedWord(title) ||
      !opt_checkSearchedWord(location) ||
      !opt_checkSearchedWord(period) ||
      !opt_checkSearchedWord(time) ||
      !opt_checkSearchedWord(address) ||
      !opt_checkSearchedWord(run_time) ||
      !opt_checkSearchedWord(capacity) ||
      !opt_checkSearchedWord(rules)
    ) {
      res.status(400).json({ message: "Invalid input" });
      return;
    }

    next();
});

// delete Reservation
handler.delete(async (req, res) => {
    try {    
        const { peformance_key } = req.body;

        {/*const results = await db.query(
            "DELETE FROM Stage_Play_DB.Performance WHERE performance_key = ?",
            [performance_key]
        );*/}
        res.status(200).json({ message: "Performance deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// insert Reservation
handler.post(async (req, res) => {
    try {
        const { title, location, period, time, address, run_time, capacity, rules } = req.body;
        
        const dateArray = period.split(", ");
        const TimeArray = time.split(", ");

        const InsertActor = "INSERT INTO Stage_Play_DB.Performance (title, location, address, run_time, capacity, rules) VALUES (?, ?, ?, ?, ?, ?)";
        const InsertActorValues = [title, location, address, run_time, capacity, rules];

        await db.query(InsertActor, InsertActorValues);

        res.status(200).json({ message: "Actor inserted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// update Reservation
handler.put(async (req, res) => {
    try {
        const { title, location, period, time, address, run_time, capacity, rules } = req.body;

        const dateArray = period.split(", ");
        const TimeArray = time.split(", ");
        
        const results = await db.query(
            "UPDATE Stage_Play_DB.Performance SET title = ?, location = ?, address = ?, run_time = ?, capacity = ?, rules = ? WHERE actor_key = ?", 
            [title, location, address, run_time, capacity, rules]
        );
        
        res.status(200).json({ message: "Actor updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default handler;