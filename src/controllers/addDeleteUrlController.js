import connection from "../dbStrategy/postgres.js";
import { nanoid } from 'nanoid'
export async function addShortUrl(req,res){
    try{
        let {url}= req.body
        url = await nanoid(8)
        console.log(url)
        console.log(token)
        res.send("post")
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