const db = require("./db_c.js");

console.log("DB_HOST:", db.connection.HOST);

async function fetchPerformanceData() {
    try {
        const results = await db.query(`
            SELECT P.title, P.location, P.capacity, D.view_day, T.view_time
            FROM Time T
            JOIN Performance P ON T.performance_key = P.performance_key
            JOIN Date D ON T.date_key = D.date_key
        `);

        // Print performance data
        console.log("Performance Information:");
        for (const row of results) {
            console.log(
                `Title: ${row.title}, Location: ${row.location}, Capacity: ${row.capacity}, View Day: ${row.view_day}, View Time: ${row.view_time}`
            );
        }
    } catch (error) {
        console.error(error);
    }
}

async function fetchActorData() {
    try {
        const results = await db.query(`
            SELECT P.title, F.performance_key, F.actor_key
            FROM Performance P
            JOIN Performer F ON P.performance_key = F.performance_key
        `);

        // Print actor data
        console.log("Actor Information:");
        for (const row of results) {
            console.log(
                `Title: ${row.title}, Performance Key: ${row.performance_key}, Actor Key: ${row.actor_key}`
            );
        }
    } catch (error) {
        console.error(error);
    }
}

// Call the functions to fetch and display data
async function getData() {
    try {
        await fetchPerformanceData();
        await fetchActorData();
    } catch (error) {
        console.error(error);
    } finally {
        db.connection.end(); // Close the database connection
    }
}

getData();
