import express from 'express';
const router = express.Router(); 
export default router;

import {
    createCat,
    getAllCats,
    getCatByID,
    getCatByName,
    // deleteCat,
    // updateCat
} from '../models/models.js';

router.get ("/", async function (req, res) { 
    let nameQuery = req.query.name;
    if (nameQuery) {    
        console.log("Fetching cat by nameQuery...");;
        res.json (await getCatByName(nameQuery));
    } else {
        console.log ("Fetching all cats...")
        res.json (await getAllCats());
    }
});

router.get("/:id", async function (req, res) {
    let id = Number(req.params.id);
    console.log("Fetching cat by ID...");
    res.json (await getCatByID(id));
});

router.post("/", async function (req, res,) {
    let newCat = req.body; 
    console.log ("Creating new cat...");
    res.json (await createCat(newCat));
});

