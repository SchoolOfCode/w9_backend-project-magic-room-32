import {query} from "../index.js";

let createTableSQL=  'CREATE TABLE bootcampers (id SERIAL PRIMARY KEY, firstName TEXT, lastName TEXT, quizResults INT, projectProgress INT);'; 

async function createTable () {
    await query (createTableSQL);
    console.log("table created");
}
createTable();
