import { query } from "../db/index.js";
import { uuid } from "uuidv4";

// register
export async function userRegister(email, password) {
  await query(
    `INSERT INTO users (email, passowrd)
   VALUES ($1, $2)
   ON CONFLICT DO NOTHING;`,
    [email, password]
  );
}

// login
export async function userLogin(email, password) {
  await query(`SELECT * from users WHERE email = $1 AND password = $2`, [
    email,
    password,
  ]);
  await query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
}
