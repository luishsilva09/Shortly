import connection from '../dbStrategy/postgres.js';
import { authorizationRepository } from '../repository/authorizationRepository.js';

export async function authorization(req,res,next){
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');

    const session = await authorizationRepository.findSession(token)

    if(!token || session.rowCount === 0){
        return res.sendStatus(401)
    }
    res.locals.session = session
    next()
}