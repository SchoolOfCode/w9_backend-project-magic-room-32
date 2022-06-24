import { query } from "../index.js";

async function deleteUsersTable() {
  const res = await query(`DROP TABLE IF EXISTS users`);
  console.log(res.command);
}
deleteUsersTable();
