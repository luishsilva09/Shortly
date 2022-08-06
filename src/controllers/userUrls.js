import { userRepository } from "../repository/userRepository.js";

export async function userUrls(req,res){
    try{
        const {rows: session} = res.locals.session;
        const userExist = await userRepository.findUser(session[0].userId)
        if(userExist.rowCount === 0){
            return res.sendStatus(404)
        }
        const {rows:data} = await userRepository.userData(session[0].userId)
        const {rows:urlsData} = await userRepository.urlsData(session[0].userId)
        const body = {
            ...data[0],
            shortenedUrls: urlsData
        }
        res.status(200).send(body)
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}