import { query } from "../index.js";

let createTableSQL =
  "CREATE TABLE progress (id SERIAL PRIMARY KEY, firstName TEXT, lastName TEXT, quizResults INT, projectProgress INT);";

async function createTable() {
  await query(createTableSQL);
  console.log("progress table created");
}
createTable();
