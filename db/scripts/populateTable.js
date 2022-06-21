import {query} from "../index.js"
import bootcampers from '../../app.js';


async function populateTable() {
    for (let i=0;i<bootcampers.length;i++) {
        let res = await query (`INSERT INTO bootcampers 
        (firstName, lastName, quizResults, projectProgress)
        VALUES ($1, $2, $3, $4);`, 
        [bootcampers[i].firstName, bootcampers[i].lastName, ])
    } console.log("Table filled.")
}

populateTable();