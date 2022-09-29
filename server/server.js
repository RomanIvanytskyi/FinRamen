const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE);
const authRouter = require("./routes/authRouter");
const transactionRouter = require("./routes/transactionRouter");
const categoryRouter = require("./routes/categoryRouter");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use("/transaction", transactionRouter);
app.use("/auth", authRouter);
app.use("/category", categoryRouter);

const start = () => {
  try {
    app.listen(PORT, () => console.log(`server started ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
