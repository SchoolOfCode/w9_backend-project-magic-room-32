import { query } from "../index.js";

let createSql = `CREATE TABLE IF NOT EXISTS diary (bootamper_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, diary TEXT, week INT )`;

async function createDiaryTable() {
  const res = await query(createSql);
  console.log(res.command, "table created");
}
createDiaryTable();
