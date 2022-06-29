import { query } from "../index.js";

async function createTable() {
  await query(`CREATE TABLE progress (weekNumber INT NOT NULL,
    quizNumber INT NOT NULL,
    correctAnswers INT,
    PRIMARY KEY(weekNumber, quizNumber));`);
  console.log("progress table created");
}
createTable();
