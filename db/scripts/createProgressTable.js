import { query } from "../index.js";

let createTableSQL = `CREATE TABLE progress (weekNumber INT NOT NULL,
   quizNumber INT NOT NULL,
   correctAnswers INT,
   PRIMARY KEY(weekNumber, quizNumber));`;

async function createTable() {
  await query(createTableSQL);
  console.log("progress table created");
}
createTable();
