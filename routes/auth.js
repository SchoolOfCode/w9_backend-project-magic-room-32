import express from "express";
import { userRegister } from "../models/authMods";
const authRouter = express.Router();

authRouter.post('/:register', (req, res)=>{
    res.json({success: true, payload: await userRegister(req.body.email, req.body.passowrd)})
})

export default authRouter;
