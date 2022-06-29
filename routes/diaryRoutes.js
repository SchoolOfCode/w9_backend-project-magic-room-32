import express from "express";
const diaryRouter = express.Router();

import {
  getDiaryEntry,
  submitDiary,
  deleteDiaryEntry,
} from "../models/diaryMods.js";

// get by id
diaryRouter.get("/:id", async function (req, res) {
  res.json({
    success: true,
    payload: await getDiaryEntry(Number(req.params.id)),
  });
});

// post
diaryRouter.post("/:id", async (req, res) => {
  res.json({ success: true, payload: await submitDiary(req.body) });
});

// delete
diaryRouter.delete("/:id", async (req, res) => {
  res.json({
    success: true,
    payload: await deleteDiaryEntry(Number(req.params.id)),
  });
});

export default diaryRouter;
