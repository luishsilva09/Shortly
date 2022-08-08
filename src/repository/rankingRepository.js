import connection from "../dbStrategy/postgres.js";

async function rankingData(){
    return await connection.query(`
    SELECT users.id AS id, users.name AS name, COUNT(shortlys)::int AS "linksCount", COALESCE(SUM(shortlys."visitCount"),0)::int AS "visitCount" FROM users 
    LEFT JOIN shortlys ON shortlys."userId" = users.id
    GROUP BY users.id 
    ORDER BY COALESCE(SUM(shortlys."visitCount"),0) DESC
    LIMIT 10
    `)
}

export const rankingRepository = {
rankingData

}