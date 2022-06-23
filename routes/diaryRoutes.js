import express from "express";
const diaryRouter = express.Router();

import { getAllDiaryEntries, getDiaryEntry, submitDiary, deleteDiaryEntry } from "../models/diaryMods.js";

diaryRouter.get("/", async function (req, res) {
  res.json({ success: true, payload: await getAllDiaryEntries() });
});

// get by id
diaryRouter.get("/:id", async function (req, res) {
  res.json({ success: true, payload: await getDiaryEntry(req.params.id) });
});

// post
diaryRouter.post("/:id", async (req, res) => {
  res.json({ success: true, payload: await submitDiary(req.body) });
  console.log("adding diary entry for week " + req.body.weekNumber)
});

// delete
diaryRouter.delete("/:id", async (req, res) => {
  let id = Number(req.params.id);
  console.log("Deleting diary for week " + id);
  res.json(await deleteDiaryEntry(id));
});

export default diaryRouter;
