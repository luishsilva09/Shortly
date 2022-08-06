import connection from "../dbStrategy/postgres.js";

export async function ranking(req,res){
    try{
        const data = await connection.query(`
        SELECT users.id AS id, users.name AS name, COUNT(shortlys) AS "linksCount", SUM(shortlys."visitCount")AS "visitCount" FROM shortlys 
        JOIN users ON shortlys."userId" = users.id
        GROUP BY users.id 
        ORDER BY "visitCount" DESC
        LIMIT 10
        `)
        res.status(200).send(data.rows)
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
} 