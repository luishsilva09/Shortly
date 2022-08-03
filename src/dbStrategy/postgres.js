import pg from 'pg';


const { Pool } = pg;

const user = 'luishenrique';
const password = '3301';
const host = 'localhost';
const port = 5050;
const database = 'shortly';

const connection = new Pool({
  user,
  password,
  host,
  port,
  database
});

export default connection