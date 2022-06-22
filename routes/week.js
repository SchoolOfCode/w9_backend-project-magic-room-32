import express from "express";
const router = express.Router();

import { getScore, submitResults } from "../models/models.js";

router.get("/:id", async function (req, res) {
  res.json({ sucess: true, payload: await getScore(req.params.id) });
});

router.post("/:id", async (req, res) => {
  // let quizNum = [1, 2, 3, 4, 5];
  // let week = await getScore(req.params.id);
  // console.log(week);
  // let each = week.map((x) => console.log(x.quiznumber));
  // if (week == null) {
  //   submitResults(req.body);
  // }
  // for (let i = 0; i < quizNum.length; i++) {
  //   if (each[i] != quizNum[i]) {
  //     submitResults(req.body);
  //   }
  // }
  res.json({ sucess: true, payload: await submitResults(req.body) });
});

// submit quiz result
// router.post("/", async function (req, res) {
//   res.json({ success: true, payload: await submitResults(req.body) });
// });

// // get results & diary by weekID
// router.get("/:id", async function (req, res) {
//   res.json({ sucess: true, payload: await getWeekById(req.params.id) });
// });

export default router;
