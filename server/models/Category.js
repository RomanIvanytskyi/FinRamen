const { Schema, model } = require("mongoose");

const Category = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    unique: false,
    required: true,
  },
  createdBy:{
    type: String,
    unique: false,
    required: true,
  }

});

module.exports = model("Category", Category);