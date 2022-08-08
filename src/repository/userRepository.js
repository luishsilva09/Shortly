import connection from "../dbStrategy/postgres.js";

async function findUser(userId){
    return await connection.query(`SELECT * FROM users WHERE users.id = $1`,[userId])
}
async function userData(userId){
    return await connection.query(`
    SELECT users.id,users.name ,SUM(shortlys."visitCount")::int AS "visitCount" FROM users 
    JOIN shortlys ON users.id = shortlys."userId"
    WHERE users.id= $1
    GROUP BY users.id
    `,
    [userId])
}
async function urlsData(userId){
    return await connection.query(`SELECT id, "shortUrl",url,"visitCount" FROM shortlys WHERE shortlys."userId" = $1`,[userId])
}
export const userRepository  = {
    findUser,
    userData,
    urlsData
}