import express from "express";
import { cloneElement } from "react";
const router = express.Router();

import { getAllBootcampers } from "../models/models.js";
import { submitResults } from "../models/models.js";

router.get("/", async (req, res) => {
  res.json({ sucess: true, payload: await getAllBootcampers() });
});

router.get("/:id", async function (req, res) {});

// submit quiz result
router.post("/", async function (req, res) {
  let userResults = req.body;
  console.log("Adding userResults to table...");
  res.json(await submitResults(userResults));
});

export default router;
