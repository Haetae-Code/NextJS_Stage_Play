//공연 추가
const nextConnect = require("next-connect");
const db = require("./db");

const insert = nextConnect();

insert.use((req, res, next) => {
  next();
});

insert.post(async (req, res) => {
  try {
    const { title, location, period, time, price, InfoLocation, address } = req.body;
    

    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default insert;

