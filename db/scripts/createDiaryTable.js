import { query } from "../index.js";

let createSql = `CREATE TABLE IF NOT EXISTS diary (diary_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  week_id INT,
  FOREIGN KEY(week_id)
  REFERENCES progress(week_id),
  diary TEXT)`;

async function createDiaryTable() {
  const res = await query(createSql);
  console.log(res.command, "table created");
}
createDiaryTable();
