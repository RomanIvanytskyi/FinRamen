const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://pyxydydyxir:Asatur_2121@cluster0.cn10gur.mongodb.net/?retryWrites=true&w=majority"
).then(()=>console.log("done"))
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