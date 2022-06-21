import { query } from "../index.js";
import { diary } from "../../data.js";

async function populateDiaryTable() {
  for (let i = 0; i < diary.length; i++) {
    const res = await query(
      `INSERT INTO diary (diary, week) VALUES ($1, $2) RETURNING *`,
      [diary[i].diary, diary[i].week]
    );
    console.log(res.rows[0]);
  }
}
populateDiaryTable();
