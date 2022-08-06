import connection from "../dbStrategy/postgres.js";

async function addShortUrl(shortUrl,url,userId){
    return await connection.query(`INSERT INTO shortlys("shortUrl","url","userId","visitCount") VALUES ($1,$2,$3,$4)`,
    [shortUrl,url,userId,0])
}

async function findShortUrl(urlId){
    return await connection.query(`SELECT * FROM shortlys WHERE shortlys.id = $1`,
    [urlId ])
}

async function deleteUrl(urlId){
    return await connection.query(`DELETE FROM shortlys WHERE id = $1`,[urlId])
}
export const addDeleteUrlsRepository = {
    addShortUrl,
    findShortUrl,
    deleteUrl
}