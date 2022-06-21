import {query} from "../index.js";

let deleteSQL=  'DROP TABLE bootcampers;'; 

async function deleteTable () {
    await query (deleteSQL);
    console.log("table deleted");
}
deleteTable();
