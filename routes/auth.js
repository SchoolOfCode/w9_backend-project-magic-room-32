import express from "express";
import { deleteUser, userLogin, userRegister } from "../models/authMods.js";

const authRouter = express.Router();

authRouter.post("/:register", async (req, res) => {
  res.json({
    success: true,
    payload: await userRegister(req.body.email, req.body.password),
  });
});

authRouter.post("/:login", async (req, res) => {
  res.json({
    success: true,
    payload: await userLogin(req.body.email, req.body.password),
  });
});

authRouter.delete("/:id", async (req, res) => {
  res.json({
    success: true,
    payload: await deleteUser(Number(req.params.id)),
  });
});

export default authRouter;
