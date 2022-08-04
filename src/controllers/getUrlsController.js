import connection from "../dbStrategy/postgres.js";
export async function listUrl(req,res){
    try{
        res.send("listar urls")
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