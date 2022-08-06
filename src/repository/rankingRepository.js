import connection from "../dbStrategy/postgres.js";

async function rankingData(){
    return await connection.query(`
    SELECT users.id AS id, users.name AS name, COUNT(shortlys) AS "linksCount", SUM(shortlys."visitCount")AS "visitCount" FROM shortlys 
    JOIN users ON shortlys."userId" = users.id
    GROUP BY users.id 
    ORDER BY "visitCount" DESC
    LIMIT 10
    `)
}

export const rankingRepository = {
rankingData

}