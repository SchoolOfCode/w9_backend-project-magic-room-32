import { query } from "../index.js";
import { diary } from "../../data.js";

async function populateDiaryTable() {
  for (let i = 0; i < diary.length; i++) {
    const res = await query(
      `INSERT INTO diary (email, weekNumber, diary) VALUES ($1, $2, $3) RETURNING *`,
      [diary[i].email, diary[i].week, diary[i].diary]
    );
    console.log(res.rows);
  }
}
populateDiaryTable();
