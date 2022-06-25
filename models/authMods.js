import { query } from "../db/index.js";

// register
export async function userRegister(email, passowrd) {
  await query(
    `INSERT INTO users (email, passowrd)
   VALUES ($1, $2)
   ON CONFLICT DO NOTHING;`,
    [email, passowrd]
  );
}

// login
