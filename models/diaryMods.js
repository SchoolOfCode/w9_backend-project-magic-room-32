import { query } from "../db/index.js";

// get diary entry from diary table using diary ID
export async function getDiaryEntry(id) {
  const res = await query(`SELECT * FROM diary WHERE week = $1`, [id]);
  return res.rows;
}

// submit new diary entry and add it to diary table
export async function submitDiary(userDiary) {
  let latestDiary = await query(
    `INSERT INTO diary (week, diary)
      VALUES ($1, $2) ON CONFLICT DO NOTHING`,
    [userDiary.weekNumber, userDiary.diaryText]
  );
  return latestDiary;
}

// delete diary entry from diary table using diary ID
export async function deleteDiaryEntry(id) {
  let deletedEntry = await query("DELETE FROM diary WHERE week = $1", [id]);
  return deletedEntry;
}
