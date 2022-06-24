import { query } from "../index.js";

let createTableSQL = `CREATE TABLE progress (weekNumber INT NOT NULL,
   quizNumber INT NOT NULL,
   bootcamper_id INT,
   correctAnswers INT,
   PRIMARY KEY(weekNumber, quizNumber, bootcamper_id));`;

async function createTable() {
  await query(createTableSQL);
  console.log("progress table created");
}
createTable();
