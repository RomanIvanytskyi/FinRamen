const { Schema, model } = require("mongoose");

const User = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    currency: {
      type: String,
      unique: false,
      required: true,
      default: "USD",
    },
  },
  { collection: "users" }
);

module.exports = model("User", User);
