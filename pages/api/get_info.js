const db = require("./db_select.js");

async function fetchPerformanceData() {
    try {
        const results = await db.query(`
            SELECT P.title, P.location, P.capacity, D.view_date, T.view_time
            FROM Time T
            JOIN Performance P ON T.performance_key = P.performance_key
            JOIN Date D ON T.date_key = D.date_key
        `);

        // Print performance data
        console.log("Performance Information:");
        for (const row of results) {
            console.log(
                `제목: ${row.title}, 장소: ${row.location}, 수용인원: ${row.capacity}, 공연날자: ${row.view_date}, 공연시간: ${row.view_time}`
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
        //await fetchPerformanceData();
        await fetchActorData();
    } catch (error) {
        console.error(error);
    } finally {
        db.connection.end(); // Close the database connection
    }
}

getData();
