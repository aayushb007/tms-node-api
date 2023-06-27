require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secretKey = process.env.SECRET_KEY;

const mongoString = process.env.DB_URL;
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/Products");
const cartRoutes = require("./routes/cartRoutes");
// const photoRouter = require("./routes/Photos");
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
app.use("/products", productRouter);
app.use("/cart", cartRoutes);

// app.use('/photo',photoRouter);

app.get("/", (req, res) => {
  res.send("Hello this is working Properly");
});
//start listening the server
app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
