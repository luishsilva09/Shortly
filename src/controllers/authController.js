import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import {authRepository} from "../repository/authRepository.js";

export async function signUp(req,res){
    try{
        const newUser = req.body
        const cryptPassword = bcrypt.hashSync(newUser.password,10)
        authRepository.signUp(newUser.name,newUser.email,cryptPassword)
        res.sendStatus(201)
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}

export async function signIn(req,res){
    try{
        const signinData = req.body
        const userData = res.locals.user
        const signin = bcrypt.compareSync(signinData.password, userData[0].password) 
        if(!signin){
            return res.sendStatus(401)
        }
        const token = uuid()
        authRepository.signIn(userData[0].id,token)
        res.status(200).send(token)
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}