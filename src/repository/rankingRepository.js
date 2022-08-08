import connection from "../dbStrategy/postgres.js";

async function rankingData(){
    return await connection.query(`
    SELECT users.id AS id, users.name AS name, COUNT(shortlys)::int AS "linksCount", SUM(shortlys."visitCount")::int AS "visitCount" FROM users 
    LEFT JOIN shortlys ON shortlys."userId" = users.id
    GROUP BY users.id 
    ORDER BY "visitCount" ASC
    LIMIT 10
    `)
}

export const rankingRepository = {
rankingData

}