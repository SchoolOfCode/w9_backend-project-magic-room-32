import express from "express";
import router from "./routes/week.js";
import cors from "cors";
import logger from "morgan";
import { submitResults } from "./models/models.js";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/", router);

app.get("/", (req, res) => {
  res.send("root route");
});

// Serves Front-end
// app.get("/", function (req, res) {
//   res.render("index", { title: "Cats" });
// });

app.listen(PORT, function () {
  console.log(`Server listening on port: ${PORT}`);
});
