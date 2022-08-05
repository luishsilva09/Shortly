import connection from "../dbStrategy/postgres.js";
export async function listUrl(req,res){
    try{
        const urlId = parseInt(req.params.id)
        const data = await connection.query(`SELECT * FROM shortlys WHERE shortlys.id = $1`,
        [urlId])
        let shortData = {...data.rows}
        if(data.rowCount === 0){
            return res.sendStatus(404)
        }
        const body = {
            id: shortData[0].id,
            shortUrl: shortData[0].shortUrl,
            url:shortData[0].url
        }
        res.status(200).send(body)
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}

export async function openUrl(req,res){
    try{
        const shortUrl = req.params.shortUrl;
        const data= await connection.query(`SELECT * FROM shortlys WHERE shortlys."shortUrl" = $1`,[shortUrl])
        if(data.rowCount === 0){
            return res.sendStatus(404)
        }
        await connection.query(`UPDATE shortlys SET "visitCount" = $1 WHERE shortlys."shortUrl" = $2`,
        [(data.rows[0].visitCount + 1), shortUrl])
        res.send(data.rows[0])
        //res.redirect(data.rows[0].url)
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}