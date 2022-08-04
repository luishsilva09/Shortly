import connection from "../dbStrategy/postgres.js";
import { nanoid } from 'nanoid'
export async function addShortUrl(req,res){
    try{
        const {rows: session} = res.locals.session
        let {url}= req.body
        url = await nanoid(8)
       await connection.query(`INSERT INTO shortlys("shortUrl","url","userId","visitCount") VALUES ($1,$2,$3,$4)`,
        [url,req.body.url,session[0].userId,0])

        const body = {
            shortUrl: url
        }

        res.status(201).send(body)
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}

export async function deleteShortUrl(req,res){
    try{
        res.send("delete")
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}