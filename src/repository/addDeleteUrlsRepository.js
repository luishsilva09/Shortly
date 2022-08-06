import connection from "../dbStrategy/postgres.js";

async function addShortUrl(shortUrl,url,userId){
    return await connection.query(`INSERT INTO shortlys("shortUrl","url","userId","visitCount") VALUES ($1,$2,$3,$4)`,
    [shortUrl,url,userId,0])
}

async function findShortUrl(){
    
}
export const addDeleteUrlsRepository = {
addShortUrl
}