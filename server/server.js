const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/FinRamen");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
const start = () => {
  try {
    app.listen(PORT, () => console.log(`server started ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();