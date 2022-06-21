import { query } from "../db/index.js";

export async function getAllBootcampers() {
  const res = await query(`SELECT * FROM progress;`);
  console.log(res.rows);
  return res.rows;
}

export async function submitResults(userResults) {
  let latestResults = await query (` INSERT INTO progress (quizNumber, correctAnswers) VALUES ($1, $2)`,
    [userResults.quizNumber, userResults.correctAnswers]);
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
