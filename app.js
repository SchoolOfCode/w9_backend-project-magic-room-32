import express from "express";
import router from './routes/routes.js'

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use ("/api/cats", router);


// Serves Front-end
// app.get("/", function (req, res) {
//   res.render("index", { title: "Cats" });
// });

const bootcampers = [
  { 
    id: 1,
    firstName: "example",
    lastName: "person",
    quizResults: Number,
    projectProgress: Number,
  },
  { 
    id: 2,
    firstName: "another",
    lastName: "bootcamper",
    quizResults: Number,
    projectProgress: Number,
  }
]
export default bootcampers;

app.listen(PORT, function () {
  console.log(`Server listening on port: ${PORT}`);
});