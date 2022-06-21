import express from "express";
import { cloneElement } from "react";
const router = express.Router();

import { getAllBootcampers } from "../models/models.js";

router.get("/", async (req, res) => {
  res.json({ sucess: true, payload: await getAllBootcampers() });
});

router.get("/:id", async function (req, res) {});

router.get("/bootcamper", async function (req, res) {});

// submit quiz result
router.post("/", async function (req, res) {
  console.log(req.body);
});

router.put("/:id", async function (req, res) {});

router.put("/:name", async function (req, res) {});

router.delete("/:id", async function (req, res) {});

router.delete("/:name", async function (req, res) {});

export default router;
