const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config({ path: '../.env.local' });

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

/*
// Check connection details
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASS);
console.log("DB_NAME:", process.env.DB_NAME);
*/

connection.on("error", (error) => {
    console.error("Database connection error:", error);
});

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  query,
};
