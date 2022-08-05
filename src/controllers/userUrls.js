import connection from "../dbStrategy/postgres.js";

export async function userUrls(req,res){
    try{
        const {rows: session} = res.locals.session;
        const {rows:data} = await connection.query(`
        SELECT * FROM users 
        JOIN shortlys ON users.id = shortlys."userId"
        WHERE users.id= $1`,
        [session[0].userId])
        res.send(data)
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}