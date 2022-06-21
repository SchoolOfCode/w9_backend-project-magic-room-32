import { query } from "../index.js";

let createSql = `CREATE TABLE IF NOT EXISTS diary (diary_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  bootcamper_id INT,
  FOREIGN KEY(bootcamper_id)
  REFERENCES progress(bootcamper_id),
  week INT,
  diary TEXT)`;

async function createDiaryTable() {
  const res = await query(createSql);
  console.log(res.command, "table created");
}
createDiaryTable();
