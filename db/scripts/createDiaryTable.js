import { query } from "../index.js";

let createSql = `CREATE TABLE IF NOT EXISTS diary (diary_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  week INT,
  diary TEXT)`;

async function createDiaryTable() {
  const res = await query(createSql);
  console.log(res.command, "table created");
}
createDiaryTable();
