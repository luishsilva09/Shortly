import { rankingRepository } from "../repository/rankingRepository.js";

export async function ranking(req,res){
    try{
        const data = await rankingRepository.rankingData()
        res.status(200).send(data.rows)
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
} 