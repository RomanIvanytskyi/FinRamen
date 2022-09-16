const express = require("express");
require('dotenv').config()
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE).then(() => console.log("done"));
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
