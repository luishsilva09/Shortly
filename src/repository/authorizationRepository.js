import connection from "../dbStrategy/postgres.js";

async function findSession(token){
    return await connection.query(`SELECT * FROM sessions WHERE sessions.token = $1`,[token])

}

export const authorizationRepository = {
    findSession
}