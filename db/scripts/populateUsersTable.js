import { query } from "../index.js";
import { users } from "../../data.js";

async function populateUsersTable() {
  for (let i = 0; i < users.length; i++) {
    const res = await query(
      `INSERT INTO users(email, password, sessionKey) VALUES($1, $2, $3);`,
      [users[i].email, users[i].password, users[i].sessioKey]
    );
    console.log(res.rows);
  }
}
populateUsersTable();
