const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "plz add a text field"],
  },
  timestamps: true,
});

module.exports = mongoose.model("goal", goalSchema);
