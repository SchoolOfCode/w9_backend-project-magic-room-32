import express from "express";
import { userLogin, userRegister } from "../models/authMods";

const authRouter = express.Router();

authRouter.post('/:register', (req, res)=>{
    res.json({success: true, payload: await userRegister(req.body.email, req.body.password)})
})

authRouter.post('/:login', (req, res)=>{
    res.json({success: true, payload: await userLogin(req.body.email, req.body.password)})
})

export default authRouter;
