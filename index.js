require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");


const mongoString = process.env.DB_URL;
const userRouter = require("./routes/userRoutes");
const taskRouter = require("./routes/taskRoutes")

const app = express();
const cors = require("cors");
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/user", userRouter);
app.use("/task", taskRouter);


app.get("/", (req, res) => {
  res.send("Hello this is working Properly");
});
//start listening the server
app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
