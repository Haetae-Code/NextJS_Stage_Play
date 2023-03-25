const nextConnect = require('next-connect');
const db = require('../../lib/db');

const handler = nextConnect();

handler.use((req, res, next) => {
  // middleware for error handling
  next();
});

handler.get(async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM Performance');
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default handler;
