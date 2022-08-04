import joi from 'joi';
import connection from '../dbStrategy/postgres.js';
import {validUserSchema} from '../schemas/validUserSchema.js'

export async function newUserValid(req,res,next){
    const newUser = req.body
    const {error} = validUserSchema.validate(newUser)
    if(error){
        return res.sendStatus(422)
    }
    const {rowCount: existUser} =await connection.query(`SELECT * FROM users WHERE users.email =$1`,[newUser.email])
    if(existUser > 0){
        return res.sendStatus(409)
    }
    next()
}