import express from "express";
import router from "./routes/bootcampers.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/bootcampers", router);

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
