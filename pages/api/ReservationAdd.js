//공연 추가
const nextConnect = require("next-connect");
const db = require("./db");
const { opt_checkSearchedWord } = require("../../injectioncode");

const insert = nextConnect();

insert.use((req, res, next) => {
  const { title, location, address, runtime, capacity, Infolocation } = req.body;

  if (
    !opt_checkSearchedWord(title) ||
    !opt_checkSearchedWord(location) ||
    !opt_checkSearchedWord(address) ||
    !opt_checkSearchedWord(runtime) ||
    !opt_checkSearchedWord(capacity) ||
    !opt_checkSearchedWord(InfoLocation)
  ) {
    res.status(400).json({ message: "Invalid input" });
    return;
  }

  next();
});

insert.post(async (req, res) => {
  try {
    const { title, location, address, runtime, capacity, InfoLocation } = req.body;
    
    const insertReservation = "INSERT INTO Stage_Play_DB.Performance (img_url, title, location, address, run_time, rules) VALUES (?, ?, ?, ?, ?, ?)";
    const insertReservationValues = [img_url, title, location, address, run_time, rules];

    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default insert;

