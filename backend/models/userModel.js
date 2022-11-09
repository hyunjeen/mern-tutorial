const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add a field"],
    },
    email: {
      type: String,
      required: [true, "please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please add a password"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("User", userSchema);
