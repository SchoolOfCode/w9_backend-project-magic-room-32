import { query } from "../index.js";

const deleteSql = `DROP TABLE IF EXISTS diary; `;

async function dropDiaryTable() {
  const res = await query(deleteSql);
  console.log(res.command, "table deleted");
}
dropDiaryTable();
