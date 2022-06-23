import express from "express";
import router from "./routes/weekRoutes.js";
import diaryRouter from "./routes/diaryRoutes.js";
import authRouter from "./routes/auth.js";
import cors from "cors";
import logger from "morgan";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use("/week", router);
app.use("/diary", diaryRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("root route");
});

app.listen(PORT, function () {
  console.log(`Server listening on port: ${PORT}`);
});

export default app;
