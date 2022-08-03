export async function signup(req,res){
    try{
        res.send('signup')
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