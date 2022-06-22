import { query } from "../index.js";

let createTableSQL =
  "CREATE TABLE progress (answer_id SERIAL PRIMARY KEY, weekNumber INT, quizNumber INT, correctAnswers INT);";

async function createTable() {
  await query(createTableSQL);
  console.log("progress table created");
}
createTable();
