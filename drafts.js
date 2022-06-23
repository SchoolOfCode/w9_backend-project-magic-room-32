// export async function getWeekById(id) {
//   const res = await query(
//     `SELECT * FROM diary INNER JOIN progress
//      ON progress.week_id = diary.week
//     WHERE progress.week_id = $1 AND diary.week = $1;`,
//     [id]
//   );
//   console.log(res.rows[0]);
//   return res.rows[0];
// }

// export async function getWeeklyScore(weekNumber) {
//     // users- 3 columns
//     // email, pass, sesionkey
//     // email, weeknum, quiznum, correctanswers
//     // const response = await query(
//     //   `SELECT email FROM users WHERE sessionKey = $1`,
//     //   [sessionKey]
//     // );
//     // let email = response.rows[0].email;

//     const res = await query(`SELECT * FROM progress WHERE weekNumber = $1`, [
//       weekNumber,
//     ]);
//     return res.rows;
//   }
