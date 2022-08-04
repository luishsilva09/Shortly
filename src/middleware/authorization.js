import joi from 'joi';
import connection from '../dbStrategy/postgres.js';

export async function authorization(req,res,next){
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');

    const session = await connection.query(`SELECT * FROM sessions WHERE sessions.token = $1`,[token])

    if(!token || session.rowCount === 0){
        return res.sendStatus(401)
    }
    res.locals.session = session
    next()
}