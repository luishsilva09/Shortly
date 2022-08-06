import { urlSchema } from '../schemas/urlSchema.js';

export async function addShortValid(req,res,next){
    const url = req.body
    const {error} = urlSchema.validate(url)
    if(error){
        return res.status(422).send(error.details)
    }
    next()
}