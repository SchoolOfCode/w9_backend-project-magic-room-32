import { query } from "../index.js";
import { bootcampers } from "../../data.js";

async function populateTable() {
  for (let i = 0; i < bootcampers.length; i++) {
    await query(
      `INSERT INTO results 
        (bootcamper_id, weekNumber, quizNumber, correctAnswers)
        VALUES ($1, $2, $3, $4);`,
      [
        bootcampers[i].bootcamper_id,
        bootcampers[i].weekNumber,
        bootcampers[i].quizNumber,
        bootcampers[i].correctAnswers,
      ]
    );
  }
  console.log("progress table filled.");
}

populateTable();
