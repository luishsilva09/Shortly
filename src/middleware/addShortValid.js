import joi from 'joi';
import connection from '../dbStrategy/postgres.js';
import { urlSchema } from '../schemas/urlSchema.js';

export async function addShortValid(req,res,next){
    const { authorization } = req.headers;
    const url = req.body
    const token = authorization?.replace('Bearer ', '');
    const {error} = urlSchema.validate(url)

    const session = await connection.query(`SELECT * FROM sessions WHERE sessions.token = $1`,[token])

    if(error){
        return res.sendStatus(422)
    }
    if(!token || session.rowCount === 0){
        return res.sendStatus(401)
    }
    res.locals.session = session
    next()
}