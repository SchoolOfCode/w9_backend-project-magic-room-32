import { query } from "../db/index.js";

// get
// export async function getWeeklyScore(weekNumber) {
//   const res = await query(`SELECT * FROM progress WHERE weekNumber = $1`, [
//     weekNumber,
//   ]);
//   return res.rows;
// }

export async function getWeeklyScore(weekNumber, sessionKey) {
  // users- 3 columns
  // email, pass, sesionkey
  // email, weeknum, quiznum, correctanswers
  const response = await query(
    `SELECT Bootcamper_id FROM users WHERE Sessionkey = $1`,
    [sessionKey]
  );
  let bootcamper_id = response.rows[0].bootcamper_id;
  console.log(bootcamper_id);

  const res = await query(
    `SELECT * FROM results WHERE weekNumber = $1 AND bootcamper_id = $2`,
    [weekNumber, bootcamper_id]
  );
  return res.rows[0];
}

// post
export async function submitResults(userResults, sessionKey) {
  let latestResults = await query(
    `INSERT INTO progress (weekNumber, quizNumber, correctAnswers)
    VALUES ($1, $2, $3) WHERE sessionKey = $4 ON CONFLICT DO NOTHING`,
    [
      userResults.weekNumber,
      userResults.quizNumber,
      userResults.correctAnswers,
      sessionKey,
    ]
  );
  return latestResults;
}
