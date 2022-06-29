import express from "express";
const router = express.Router();

import { getWeeklyScore, submitResults } from "../models/weekMods.js";

// get weekly score from a particular week
router.get("/:id", async function (req, res) {
  // calculate average
  let scores = await getWeeklyScore(Number(req.params.id));
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i].correctanswers;
  }
  // get percentage
  total = Math.floor((total / (scores.length * 10)) * 100);
  res.json({
    success: true,
    payload: { percentage: total },
  });
});

// post
router.post("/:id", async (req, res) => {
  res.json({ success: true, payload: await submitResults(req.body) });
});

export default router;
