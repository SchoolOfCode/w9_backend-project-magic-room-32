import express from "express";
import router from "./routes/weekRoutes.js";
import diaryRouter from "./routes/diaryRoutes.js";
import cors from "cors";
import logger from "morgan";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/week", router);
app.use("/diary", diaryRouter);

app.listen(PORT, function () {
  console.log(`Server listening on port: ${PORT}`);
});

export default app;
