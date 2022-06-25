import { query } from "../index.js";

async function createUsersTable() {
  const res = await query(`CREATE TABLE IF NOT EXISTS users 
    (bootcamper_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      email VARCHAR (255),
    password VARCHAR (50),
    sessionKey UUID)`);
  console.log(res.command);
}

createUsersTable();
