//insert권한만 가진 계정

const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config({ path: "../../.env.local" });

const connection = mysql.createConnection({
    host: process.env.INSERT_HOST,
    port: process.env.INSERT_PORT,
    user: process.env.INSERT_USER,
    password: process.env.INSERT_PASS,
    database: process.env.INSERT_NAME,
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
