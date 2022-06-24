import { query } from "../index.js";

let createSql = `CREATE TABLE IF NOT EXISTS diary
 (email VARCHAR (255) PRIMARY KEY,
  weekNumber INT,
  diary TEXT)`;

async function createDiaryTable() {
  await query(createSql);
  console.log("diary table created");
}
createDiaryTable();
