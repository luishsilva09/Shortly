import { getUrlsRepository } from "../repository/getUrlsrepository.js";
export async function listUrl(req,res){
    try{
        const urlId = parseInt(req.params.id)
        const data = await getUrlsRepository.getUrl(urlId)
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
        const data= await getUrlsRepository.openUrl(shortUrl)
        if(data.rowCount === 0){
            return res.sendStatus(404)
        }
        await getUrlsRepository.updateVisits(data,shortUrl)
        res.redirect(data.rows[0].url)
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}