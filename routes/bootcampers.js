import express from "express";
const router = express.Router();

import { getAllBootcampers } from "../models/models.js";

router.get("/", async (req, res) => {
  res.json({ sucess: true, payload: await getAllBootcampers() });
});

router.get("/:id", async function (req, res) {});

router.get("/:name", async function (req, res) {});

router.post("/", async function (req, res) {});

router.put("/:id", async function (req, res) {});

router.put("/:name", async function (req, res) {});

router.delete("/:id", async function (req, res) {});

router.delete("/:name", async function (req, res) {});

export default router;