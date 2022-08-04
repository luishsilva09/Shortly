import connection from "../dbStrategy/postgres.js";
import bcrypt from 'bcrypt';
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
        res.send('signin')
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}