import { query } from "../index.js";

async function dropDiaryTable() {
  const res = await query(`DROP TABLE IF EXISTS diary;`);
  console.log("diary table deleted");
}
dropDiaryTable();
