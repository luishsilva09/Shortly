import connection from "../dbStrategy/postgres.js";
export async function addShortUrl(req,res){
    try{
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