import { query } from "../db/index.js";

export async function createBootcamper(newCat) {
  let createdCat = await query(
    "INSERT INTO bootcampers (firstName, lastName, quizResults, projectProgress) VALUES ($1, $2, $3, $4)",
    [newCat.name, newCat.human, newCat.hobby]
  );
  return createdCat;
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
