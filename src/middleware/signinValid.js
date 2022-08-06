import { authRepository } from '../repository/authRepository.js';
import { loginValidSchema } from '../schemas/validUserSchema.js';

export async function signinValid(req,res,next){
    const userData = req.body
    const {error} = loginValidSchema.validate(userData)

    const existUser = await authRepository.existUser(userData.email)
    if(existUser.rowCount === 0){
        return res.status(401).send("Email ou senha inválidos")
    }
    if(error){
        return res.status(422).send(error.details)
    }
    res.locals.user = existUser.rows
    next()
}