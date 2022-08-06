import connection from "../dbStrategy/postgres.js";

async function signUp(name,email,cryptPassword){
    return await connection.query(`INSERT INTO users("name","email","password") VALUES( $1,$2,$3) `,
    [name,email,cryptPassword])
}
async function signIn(id,token){
    await connection.query(`INSERT INTO sessions("userId","token") VALUES($1,$2)`,
        [id,token])
}

async function existUser(email){
    return await connection.query(`SELECT * FROM users WHERE users.email =$1`,[email])
}
export const authRepository = {
    signUp,
    signIn,
    existUser
}