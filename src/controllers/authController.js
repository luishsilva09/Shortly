import connection from "../dbStrategy/postgres.js";
export async function signup(req,res){
    try{
        let teste = await connection.query('SELECT * FROM users')
        res.send(teste)
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}

export async function signin(req,res){
    try{
        res.send('signin')
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
      }
}