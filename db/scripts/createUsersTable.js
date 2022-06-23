import { query } from "../index";

async function createUsersTable() {
  const res = await query(`CREATE TABLE IF NOT EXSITS users 
    (bootcamper_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    email TEXT,
    password TEXT,
    sessionKey TEXT)`);
  console.log(res.command);
}

createUsersTable();
