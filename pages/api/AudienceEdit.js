// 공연 예약자 편집&삭제
const nextConnect = require("next-connect");
const db = require("./db");
const { opt_checkSearchedWord } = require("../../injectioncode");

const handler = nextConnect();

handler.use(async (req, res, next) => {
    const { audience_key, name, userType, id, department, phone_number  } = req.body;

    const isValidInput = [
      audience_key, name, userType, id, department, phone_number 
    ].every(opt_checkSearchedWord);

    if (!isValidInput) {
        res.status(400).json({ message: "Invalid" });
        return;
    }

    await db.beginTransaction();
    next();
});

// delete Audience
handler.delete(async (req, res) => {
    try {    
        const { audience_key, userType } = req.body;

        {/*const results = await db.query(
            "DELETE FROM Stage_Play_DB.Audience WHERE audience_key = ?",
            [audience_key]
        );*/}

        {/*if (userType === 'student') {
            await db.query("DELETE FROM Stage_Play_DB.Student WHERE audience_key = ?",
            [audience_key]);
        }
        else if (userType === 'outsider') {
            await db.query("DELETE FROM Stage_Play_DB.Outsider WHERE audience_key = ?",
            [audience_key]);
        }

        await db.query(
            "DELETE FROM Stage_Play_DB.Reservation WHERE audience_key = ?",
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

// update Audience
handler.put(async (req, res) => {
    try {
        const { audience_key, name, userType, id, department, phone_number } = req.body;
        
        await db.query(
            "UPDATE Stage_Play_DB.Audience SET name = ?, phone_number = ? WHERE audience_key = ?", 
            [name, phone_number, audience_key]
        );

        if (userType === 'student') {
            await db.query(
                "UPDATE Stage_Play_DB.Student SET id = ?, department = ? WHERE audience_key = ?", 
                [id, department, audience_key]
            );
        }

        await db.commit();
        res.status(200).json({ message: "Audience updated successfully" });
    } catch (error) {
        await db.rollback();
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default handler;