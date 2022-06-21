import express from "express";

const router = express.Router();

import { getWeekById } from "../models/models.js";

router.get("/:id", async function (req, res) {
  res.json({ sucess: true, payload: await getWeekById(req.params.id) });
});

// submit quiz result
router.post("/", async function (req, res) {
  console.log(req.body);
});

router.put("/:id", async function (req, res) {});

router.delete("/:id", async function (req, res) {});

export default router;
