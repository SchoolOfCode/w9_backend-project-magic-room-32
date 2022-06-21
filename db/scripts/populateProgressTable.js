import { query } from "../index.js";
import {bootcampers} from "../../data.js";

async function populateTable() {
  for (let i = 0; i < bootcampers.length; i++) {
    await query(
      `INSERT INTO progress 
        (firstName, lastName, quizResults, projectProgress)
        VALUES ($1, $2, $3, $4);`,
      [bootcampers[i].firstName, bootcampers[i].lastName, bootcampers[i].quizResults, bootcampers[i].projectProgress]
    );
  }
  console.log("progress Table filled.");
}

populateTable();