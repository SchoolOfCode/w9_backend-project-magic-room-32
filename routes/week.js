import express from "express";
const router = express.Router();

import { getWeeklyScore, submitResults } from "../models/models.js";

router.get("/:id", async function (req, res) {
  let scores = await getWeeklyScore(Number(req.params.id));
  console.log(scores);
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i].correctanswers;
  }
  // get percentage
  total = Math.floor((total / (scores.length * 10)) * 100);
  console.log(total);
  res.json({
    sucess: true,
    payload: { percentage: total },
  });
});

router.post("/:id", async (req, res) => {
  res.json({ sucess: true, payload: await submitResults(req.body) });
});

// // get results & diary by weekID
// router.get("/:id", async function (req, res) {
//   res.json({ sucess: true, payload: await getWeekById(req.params.id) });
// });

export default router;
