import { query } from "../index.js";

let createSql = `CREATE TABLE IF NOT EXISTS diary
 (diary_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  bootcamper_id INT,
  weekNumber INT,
  diary TEXT)`;

async function createDiaryTable() {
  await query(createSql);
  console.log("diary table created");
}
createDiaryTable();
