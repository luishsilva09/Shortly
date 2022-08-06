import { authRepository } from '../repository/authRepository.js';
import {validUserSchema} from '../schemas/validUserSchema.js'

export async function newUserValid(req,res,next){
    const newUser = req.body
    const {error} = validUserSchema.validate(newUser,{abortEarly:false})
    if(error){
        return res.status(422).send(error.details)
    }
    const existUser = authRepository.existUser(newUser.email)
    if((await existUser).rowCount > 0){
        return res.sendStatus(409)
    }
    next()
}