import { query } from "../db/index.js";
import { v4 as uuidv4 } from "uuid";

// register
export async function userRegister(email, password) {
  const res = await query(
    `INSERT INTO users (email, password)
   VALUES ($1, $2)
   ON CONFLICT DO NOTHING;`,
    [email, password]
  );
  return res.rows;
}
const sessionKey = uuidv4();
console.log(sessionKey);
// login
export async function userLogin(email, password) {
  const res = await query(
    `SELECT bootcamper_id from users WHERE email = $1 AND password = $2`,
    [email, password]
  );
  let bootcamper_id = res.rows[0].bootcamper_id;

  const response = await query(
    `UPDATE users SET sessionKey = $1 WHERE bootcamper_id = $2;`,
    [sessionKey, bootcamper_id]
  );
  return response.rows;
}

// delete
export async function deleteUser(id) {
  const res = await query(`DELETE FROM users WHERE bootcamper_id = $1`, [id]);
  return res.rows;
}
