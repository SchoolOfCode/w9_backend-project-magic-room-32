import { query } from "../index.js";

let deleteSQL = "DROP TABLE results;";

async function deleteTable() {
  await query(deleteSQL);
  console.log("progress table deleted");
}
deleteTable();
