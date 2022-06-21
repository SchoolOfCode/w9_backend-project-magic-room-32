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

app.post ("/", async (req, res) => {
  let response = await submitResults(req.body);
  console.log("hello world");
  console.log(response);
  console.log(req.body);
  res.send("finished");
})

// Serves Front-end
// app.get("/", function (req, res) {
//   res.render("index", { title: "Cats" });
// });

app.listen(PORT, function () {
  console.log(`Server listening on port: ${PORT}`);
});
