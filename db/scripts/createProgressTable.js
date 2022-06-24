import { query } from "../index.js";

let createTableSQL = `CREATE TABLE results (weekNumber INT NOT NULL,
   quizNumber INT NOT NULL,
   email VARCHAR (255),
   correctAnswers INT,
   PRIMARY KEY(weekNumber, quizNumber, email));`;

async function createTable() {
  await query(createTableSQL);
  console.log("progress table created");
}
createTable();
