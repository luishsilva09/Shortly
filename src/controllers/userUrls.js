import connection from "../dbStrategy/postgres.js";

export async function userUrls(req,res){
    try{
        const {rows: session} = res.locals.session;
        const userExist = await connection.query(`SELECT * FROM users WHERE users.id = $1`,[session[0].userId])
        if(userExist.rowCount === 0){
            return res.sendStatus(404)
        }
        const {rows:data} = await connection.query(`
        SELECT users.id,users.name ,SUM(shortlys."visitCount") AS "visitCount" FROM users 
        JOIN shortlys ON users.id = shortlys."userId"
        WHERE users.id= $1
        GROUP BY users.id
        `,
        [session[0].userId])
        const {rows:urlsData} = await connection.query(`SELECT id, "shortUrl",url,"visitCount" FROM shortlys WHERE shortlys."userId" = $1`,[session[0].userId])
        const body = {
            ...data[0],
            shortenedUrls: urlsData
        }
        res.status(200).send(body)
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}