const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PORT = 8000;
const DB_URL =
  "mongodb+srv://seyagubzade:seyagubzade123@cluster0.2wwolad.mongodb.net/";
const CourseRouter = require("./routes/Course.routes");

app.use(cors());
app.use(express.json());

mongoose.connect(DB_URL).then(() => console.log("Connected to db!"));

app.use("/course", CourseRouter);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
