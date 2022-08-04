import joi from 'joi';
import {validUserSchema} from '../schemas/validUserSchema.js'

export async function newUserValid(req,res,next){
    
    const newUser = req.body
    const {error} = validUserSchema.validate(newUser)
    if(error){
        return res.sendStatus(422)
    }
    res.send(newUser)
}