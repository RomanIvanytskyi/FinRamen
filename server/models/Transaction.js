const { Schema, model } = require("mongoose");

const Transaction = new Schema({
  userId: {
    type: String,
    unique: false,
    required: true,
  },
  money_operations: {
    type: Number,
    unique: false,
    required: true,
  },
  type: {
    type: String,
    unique: false,
    required: false,
  },
  description:{
    type: String,
    unique: false,
    required: false,
  },
  created:{
    type: String,
    unique: false,
    required: true,
  }

});

module.exports = model("Transaction", Transaction);
