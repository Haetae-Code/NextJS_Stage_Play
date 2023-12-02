// 공연 추가&편집&삭제
const nextConnect = require("next-connect");
const db = require("./db");
const { opt_checkSearchedWord } = require("../../injectioncode");

const handler = nextConnect();

handler.use(async (req, res, next) => {
    const { title, location, period, time, address, run_time, capacity, rules } = req.body;

    const isValidInput = [
        title, location, period, time, address, run_time, capacity, rules
    ].every(opt_checkSearchedWord);

    if (!isValidInput) {
        res.status(400).json({ message: "Invalid" });
        return;
    }

    await db.beginTransaction();
    next();
});

// delete Reservation
handler.delete(async (req, res) => {
    try {    
        const { peformance_key, view_date, view_time, time_key } = req.body;

        {/*const results = await db.query(
            "DELETE FROM Stage_Play_DB.Time WHERE time_key = ?",
            [time_key]
        );*/}
        await db.commit();
        res.status(200).json({ message: "Performance deleted successfully" });
    } catch (error) {
        await db.rollback();
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

async function insertDate(date) {
    const DateKey = await db.query(
        "SELECT date_key FROM Stage_Play_DB.Date WHERE view_date = ?;", 
        [date]
    );

    if (DateKey.length === 0) {
        const insertResult = await db.query(
            "INSERT INTO Stage_Play_DB.Date (view_date) VALUES (?)",
            [date]
        );
        return insertResult[0][0]['LAST_INSERT_ID()'];    
    } else {
        return DateKey[0].date_key;
    }
}

// insert Reservation
handler.post(async (req, res) => {
    try {
        const { title, location, period, time, address, run_time, capacity, rules } = req.body;
        
        const DateArray = period.split(/[,\s]+|T/);
        const TimeArray = DateArray[1];

        const InsertPerformance = "INSERT INTO Stage_Play_DB.Performance (title, location, address, run_time, capacity, rules) VALUES (?, ?, ?, ?, ?, ?)";
        const InsertPerformanceValues = [title, location, address, run_time, capacity, rules];

        const [{ performance_key }] = await db.query(
            "SELECT COALESCE(MAX(performance_key), 0) + 1 AS performance_key FROM Stage_Play_DB.Performance"
        ); 

        const datekey = await Promise.all(TimeArray.map(insertDate));

        for (const dateItem of DateArray) {
            for (let i = 0; i < TimeArray.length; i++) {
                await db.query(
                    "INSERT INTO Stage_Play_DB.Time (date_key, performance_key, view_time) VALUES (?, ?, ?)",
                    [datekey[i], performance_key, dateItem]
                );
            }
        }
        await db.commit();
        res.status(200).json({ message: "Performance inserted successfully" });
    } catch (error) {
        await db.rollback();
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// update Reservation
handler.put(async (req, res) => {
    try {
        const { title, location, period, address, run_time, capacity, rules, performance_key } = req.body;

        const rDateArray = period.split(/[,\s]+|T/);
        const DateArray = rDateArray[0];
        const TimeArray = rDateArray[1];
        
        const results = await db.query(
            "UPDATE Stage_Play_DB.Performance SET title = ?, location = ?, address = ?, run_time = ?, capacity = ?, rules = ? WHERE performance_key = ?", 
            [title, location, address, run_time, capacity, rules, performance_key]
        );

        const datekey = await Promise.all(TimeArray.map(insertDate));

        for (const dateItem of DateArray) {
            for (let i = 0; i < TimeArray.length; i++) {
                await db.query(
                    "UPDATE INTO Stage_Play_DB.Time (date_key, performance_key, view_time) VALUES (?, ?, ?)",
                    [datekey[i], performance_key, dateItem]
                );
            }
        }
        await db.commit();
        res.status(200).json({ message: "Performance updated successfully" });
    } catch (error) {
        await db.rollback();
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default handler;