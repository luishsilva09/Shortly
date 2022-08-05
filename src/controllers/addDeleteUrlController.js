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
        const {rows: session} = res.locals.session
        const urlId = parseInt(req.params.id)
        const shortUrl = await connection.query(`SELECT * FROM shortlys WHERE shortlys.id = $1`,
        [urlId ])
        if(shortUrl.rowCount === 0){
            return res.status(404).send("Url não encontrada")
        }
        if(shortUrl.rows[0].userId !== session[0].userId){
            return res.sendStatus(401)
        }
        await connection.query(`DELETE FROM shortlys WHERE id = $1`,[urlId])
        res.sendStatus(204)
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}