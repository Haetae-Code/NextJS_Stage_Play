//select권한만 가진 계정

const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config({ path: "../../.env.local" });

const connection = mysql.createConnection({
    host: process.env.SELECT_HOST,
    port: process.env.SELECT_PORT,
    user: process.env.SELECT_USER,
    password: process.env.SELECT_PASS,
    database: process.env.SELECT_NAME,
});

connection.connect((error) => {
    if (error) {
        console.error("Error connecting to database:", error);
    } else {
        console.log("Connected to database!");
    }
});

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
    connection, // Add this line to export the connection object
};
