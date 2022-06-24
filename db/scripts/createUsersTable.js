import { query } from "../index.js";

async function createUsersTable() {
  const res = await query(`CREATE TABLE IF NOT EXISTS users 
    (email VARCHAR (255) PRIMARY KEY,
    password VARCHAR (50),
    sessionKey VARCHAR (50))`);
  console.log(res.command);
}

createUsersTable();
