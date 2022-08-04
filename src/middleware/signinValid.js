import joi from 'joi';
import connection from '../dbStrategy/postgres.js';
import { loginValidSchema } from '../schemas/validUserSchema.js';

export async function signinValid(req,res,next){
    const userData = req.body
    const {error} = loginValidSchema.validate(userData)

    const {rowCount: existUser} =await connection.query(`SELECT * FROM users WHERE users.email =$1`,[userData.email])
    if(existUser === 0){
        return res.sendStatus(401)
    }
    if(error){
        return res.sendStatus(422)
    }
    res.send("valida login")
}