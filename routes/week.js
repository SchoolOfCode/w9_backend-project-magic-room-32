import express from "express";
const router = express.Router();
<<<<<<< HEAD
=======

>>>>>>> post

import { getWeekById, submitResults } from "../models/models.js";

router.get("/:id", async function (req, res) {
  res.json({ sucess: true, payload: await getWeekById(req.params.id) });
});

// submit quiz result
router.post("/", async function (req, res) {
  res.json({ success: true, payload: await submitResults(req.body) });
<<<<<<< HEAD
=======

>>>>>>> post
});

// get results & diary by weekID
router.get("/:id", async function (req, res) {
  res.json({ sucess: true, payload: await getWeekById(req.params.id) });
});

export default router;
