import connection from "../dbStrategy/postgres.js";

async function getUrl(urlId){
    return await connection.query(`SELECT * FROM shortlys WHERE shortlys.id = $1`,
    [urlId])
}
async function openUrl(shortUrl){
    return await connection.query(`SELECT * FROM shortlys WHERE shortlys."shortUrl" = $1`,[shortUrl])
}
async function updateVisits(data, shortUrl){
    return await connection.query(`UPDATE shortlys SET "visitCount" = $1 WHERE shortlys."shortUrl" = $2`,
    [(data.rows[0].visitCount + 1), shortUrl])
}
export const getUrlsRepository = {
    getUrl,
    openUrl,
    updateVisits
}