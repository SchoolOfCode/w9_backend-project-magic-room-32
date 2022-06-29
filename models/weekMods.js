import { query } from "../db/index.js";

// get weekly score using a particular week number
export async function getWeeklyScore(weekNumber) {
  const res = await query(`SELECT * FROM progress WHERE weekNumber = $1`, [
    weekNumber,
  ]);
  return res.rows;
}

// submit results into the progress table
export async function submitResults(userResults) {
  let latestResults = await query(
    `INSERT INTO progress (weekNumber, quizNumber, correctAnswers)
    VALUES ($1, $2, $3) ON CONFLICT DO NOTHING`,
    [userResults.weekNumber, userResults.quizNumber, userResults.correctAnswers]
  );
  return latestResults;
}
