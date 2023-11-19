// 공연 예약자 편집&삭제
const nextConnect = require("next-connect");
const db = require("./db");
const { opt_checkSearchedWord } = require("../../injectioncode");

const handler = nextConnect();

handler.use(async (req, res, next) => {
    const { audience_key, name, userType, id, department, phone_number } = req.body;

    const isValidInput = [
      audience_key, name, userType, id, department, phone_number
    ].every(opt_checkSearchedWord);

    if (!isValidInput) {
        res.status(400).json({ message: "Invalid input" });
        return;
    }

    await db.beginTransaction();
    next();
});

// delete Audience
handler.delete(async (req, res) => {
    try {    
        const { audience_key, name, userType, id, department, phone_number } = req.body;

        {/*const results = await db.query(
            "DELETE FROM Stage_Play_DB.Audience WHERE audience_key = ?",
            [audience_key]
        );*/}
        await db.commit();
        res.status(200).json({ message: "Audience deleted successfully" });
    } catch (error) {
        await db.rollback();
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// update Reservation
handler.put(async (req, res) => {
    try {
        const { audience_key, name, userType, id, department, phone_number } = req.body;
        
        const results = await db.query(
            "UPDATE Stage_Play_DB.Audience SET title = ?, location = ?, address = ?, run_time = ?, capacity = ?, rules = ? WHERE performance_key = ?", 
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