import connection from "../dbStrategy/postgres.js";
import { nanoid } from 'nanoid'
import { addDeleteUrlsRepository } from "../repository/addDeleteUrlsRepository.js";

export async function addShortUrl(req,res){
    try{
        const {rows: session} = res.locals.session
        let {url}= req.body
        url = nanoid(8)
        await addDeleteUrlsRepository.addShortUrl(url,req.body.url,session[0].userId)
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
        const shortUrl = await addDeleteUrlsRepository.findShortUrl(urlId)
        if(shortUrl.rowCount === 0){
            return res.status(404).send("Url não encontrada")
        }
        if(shortUrl.rows[0].userId !== session[0].userId){
            return res.sendStatus(401)
        }
        await addDeleteUrlsRepository.deleteUrl(urlId)
        res.status(204).send("Deletado com sucesso")
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}