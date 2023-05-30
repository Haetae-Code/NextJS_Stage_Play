const db = require("../../lib/db_c");

async function fetchPerformanceData() {
    try {
        const results = await db.query(`
      SELECT P.title, P.location, P.capacity, D.view_day, T.view_time
      FROM time T
      JOIN performance P ON T.performance_key = P.performance_key
      JOIN date D ON T.date_key = D.date_key
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
      SELECT P.title, H.performance_key, H.actor_key
      FROM performance P
      JOIN human H ON P.performance_key = H.performance_key
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
fetchPerformanceData();
fetchActorData();
