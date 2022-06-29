import { query } from "../index.js";

async function createDiaryTable() {
  await query(`CREATE TABLE IF NOT EXISTS diary
  (diary_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   week INT,
   diary TEXT)`);
  console.log("diary table created");
}
createDiaryTable();
