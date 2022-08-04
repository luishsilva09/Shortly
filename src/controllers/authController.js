import connection from "../dbStrategy/postgres.js";
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

export async function signUp(req,res){
    try{
        const newUser = req.body
        const cryptPassword = bcrypt.hashSync(newUser.password,10)
        await connection.query(`INSERT INTO users("name","email","password") VALUES( $1,$2,$3) `,
        [newUser.name,newUser.email,cryptPassword])
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
        await connection.query(`INSERT INTO sessions("userId","token") VALUES($1,$2)`,
        [userData[0].id,token])
        res.status(200).send(token)
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}