import express from "express";

import { submitResults } from "../models/models.js";
import { getWeekById } from "../models/models.js";

const router = express.Router();

// submit quiz result
router.post("/", async function (req, res) {
  let userResults = req.body;
  console.log("Adding userResults to table...");
  res.json(await submitResults(userResults));
});

// get results & diary by weekID
router.get("/:id", async function (req, res) {
  res.json({ sucess: true, payload: await getWeekById(req.params.id) });
});

export default router;
