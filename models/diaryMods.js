import { query } from "../db/index.js";

// get all entries (base path)
export async function getAllDiaryEntries () {
  const res = await query (`SELECT * FROM diary`);
  return res.rows;
}

// get by ID
export async function getDiaryEntry(id) {
  const res = await query(`SELECT * FROM diary WHERE week = $1`, [id]);
  return res.rows;
}

// post
export async function submitDiary(userDiary) {
    let latestDiary = await query(
      `INSERT INTO diary (week, diary)
      VALUES ($1, $2) ON CONFLICT DO NOTHING`,
      [userDiary.weekNumber, userDiary.diaryText]
    );
    return latestDiary;
  }

// delete
export async function deleteDiaryEntry (id) { 
  let deletedEntry = await query ('DELETE FROM diary WHERE week = $1', [id]);
  return deletedEntry;
}