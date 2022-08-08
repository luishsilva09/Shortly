import { rankingRepository } from "../repository/rankingRepository.js";

export async function ranking(req,res){
    try{
        const data = await rankingRepository.rankingData()
        let ranking = []
        data.rows.map(e => {
            if(e.visitCount === null){
               ranking.push({
                id: e.id,
                name : e.name,
                linksCount: e.linksCount,
                visitCount: 0,
            })     
            }else{
                ranking.push(e)
            } 
        })
        res.status(200).send(ranking)
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
} 