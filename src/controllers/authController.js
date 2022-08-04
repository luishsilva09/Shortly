import connection from "../dbStrategy/postgres.js";
export async function signUp(req,res){
    try{
        const newUser = req.body
        res.send(newUser)
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