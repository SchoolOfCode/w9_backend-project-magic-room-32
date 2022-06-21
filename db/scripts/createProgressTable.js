import { query } from "../index.js";

let createTableSQL =
  "CREATE TABLE progress (week_id SERIAL PRIMARY KEY, quizResults INT);";

async function createTable() {
  await query(createTableSQL);
  console.log("progress table created");
}
createTable();
