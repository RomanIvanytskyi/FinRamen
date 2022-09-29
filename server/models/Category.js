const { Schema, model } = require("mongoose");

const Category = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  type: {
    type: String,
    niqe: false,
    required: true,
  },
  description: {
    type: String,
    unique: false,
    required: true,
  },
  createdBy: {
    type: String,
    unique: false,
    required: false,
  },
});

module.exports = model("Category", Category);
