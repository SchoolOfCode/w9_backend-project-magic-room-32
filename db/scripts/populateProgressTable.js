import { query } from "../index.js";
import {bootcampers} from "../../data.js";

async function populateTable() {
  for (let i = 0; i < bootcampers.length; i++) {
    await query(
      `INSERT INTO progress 
        (quizResults)
        VALUES ($1);`,
      [bootcampers[i].quizResults]
    );
  }
  console.log("progress Table filled.");
}

populateTable();