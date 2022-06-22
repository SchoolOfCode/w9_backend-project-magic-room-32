import { query } from "../db/index.js";

export async function getWeekById(id) {
  const res = await query(
    `SELECT * FROM diary INNER JOIN progress
     ON progress.week_id = diary.week
    WHERE progress.week_id = $1 AND diary.week = $1;`,
    [id]
  );
  console.log(res.rows[0]);
  return res.rows[0];
}

// export async function submitResults(userResults) {
//   let latestResults = await query(
//     `BEGIN IF NOT EXISTS (SELECT * FROM progress WHERE weekNumber = weekNumber
//       AND quizNumber = quizNumber
//       AND correctAnswers = correctAnswers)
//       BEGIN INSERT INTO progress (weekNumber, quizNumber, correctAnswers)
//       VALUES ($1, $2, $3) END END;`,
//     [userResults.weekNumber, userResults.quizNumber, userResults.correctAnswers]
//   );
//   return latestResults;
// }

export async function submitResults(userResults) {
  let latestResults = await query(
    `INSERT INTO progress (weekNumber, quizNumber, correctAnswers)
    VALUES ($1, $2, $3) WHERE NOT EXISTS (SELECT * FROM progress WHERE weekNumber = $1
      AND quizNumber = $2
      AND correctAnswers = $3);`,
    [userResults.weekNumber, userResults.quizNumber, userResults.correctAnswers]
  );
  return latestResults;
}

// export async function getAllBootcampers(){
//     let allCats = await query(`SELECT * FROM bootcampers;`);
//     // return {payload: allCats.rows};
// }

// export async function getCatByID(id){
//     let foundCat = await query(`SELECT * FROM cats WHERE id = $1`, [id]);
//     return foundCat.rows;
// }

// export async function getCatByName(nameQuery){
//     let foundCat = await query(`SELECT * FROM cats WHERE name LIKE $1`, [nameQuery]);
//     return foundCat.rows;
// }
