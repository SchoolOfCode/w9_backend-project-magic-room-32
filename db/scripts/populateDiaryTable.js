import { query } from "../index.js";
import { diary } from "../../data.js";

async function populateDiaryTable() {
  for (let i = 0; i < diary.length; i++) {
    const res = await query(
      `INSERT INTO diary (week, diary) VALUES ($1, $2) RETURNING *`,
      [diary[i].week, diary[i].diary]
    );
    console.log("diary table filled");
  }
}
populateDiaryTable();
