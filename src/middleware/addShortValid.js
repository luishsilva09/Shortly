import joi from 'joi'
import { urlSchema } from '../schemas/urlSchema.js';
export async function addShortValid(req,res,next){
    const { authorization } = req.headers;
    const url = req.body
    const token = authorization?.replace('Bearer ', '');

    const {error} = urlSchema.validate(url)
    if(error){
        console.log(error)
        return res.sendStatus(422)
    }
}