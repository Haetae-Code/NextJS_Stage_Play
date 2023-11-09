// 공연예약자 선택
const nextConnect = require("next-connect");
const db = require("./db");
const opt_checkSearchedWord  = require("../../injectioncode");

const handler = nextConnect();

handler.use((req, res, next) => {
    let { performance_key, selectedDate, selectedTime, time_key } = req.body;

    const isValidInput = [
        performance_key, selectedDate, selectedTime, time_key
      ].every(opt_checkSearchedWord);
  
      if (!isValidInput) {
        res.status(400).json({ message: "Invalid input" });
        return;
      }

    next();
});

handler.post(async (req, res) => {
    try {
        //search time key
        const { performance_key, selectedDate, selectedTime, time_key } = req.body;
        // const [getTimeKeys] = await db.query(`
        //     SELECT T.time_key, T.view_time, D.view_date
        //     FROM Stage_Play_DB.Date D
        //     JOIN Stage_Play_DB.Time T ON D.date_key = T.date_key 
        //     WHERE T.performance_key = ?;
        // `, [performance_key]);
        // console.log(getTimeKeys);
        
        // const time_key = () => {
        //     if (getTimeKeys) {
        //         const result = getTimeKeys.find(keys => keys.view_date === selectedDate && keys.view_time === selectedTime);
        //         return result ? result.time_key : null;
        //     }
        //     return null;
        // };

        const [audience_key] = await db.query("SELECT audience_key FROM Stage_Play_DB.Reservation WHERE time_key = ?", [time_key]);
        
        if (audience_key === null) {
            res.status(400).json({ message: "Invalid time selection" });
            return;
        }
        
        const [Audience] = await db.query(`
            SELECT A.audience_key, S.student_key, O.outsider_key, A.name, S.id, S.department, A.phone_number
            FROM Stage_Play_DB.Audience A 
            JOIN Stage_Play_DB.Student S on A.audience_key = S.audience_key
            JOIN Stage_Play_DB.Outsider O on A.audience_key = O.audience_key
            WHERE A.audience_key = ?
        `, [audience_key]);

        res.status(200).json([Audience]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default handler;
