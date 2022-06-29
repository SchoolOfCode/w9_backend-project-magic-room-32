import { query } from "../index.js";

async function deleteTable() {
  await query("DROP TABLE IF EXISTS progress;");
  console.log("progress table deleted");
}
deleteTable();
