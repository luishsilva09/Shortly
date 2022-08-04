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
        
        res.send("abrir urls")
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}