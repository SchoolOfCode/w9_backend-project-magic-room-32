import express from "express";
import router from "./routes/routes.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/api/diary", router);

// Serves Front-end
// app.get("/", function (req, res) {
//   res.render("index", { title: "Cats" });
// });

app.listen(PORT, function () {
  console.log(`Server listening on port: ${PORT}`);
});
