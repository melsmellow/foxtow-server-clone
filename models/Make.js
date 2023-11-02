const mongoose = require("mongoose");

const makesSchema = new mongoose.Schema({
  make: {
    type: String,
    maxLength: 12,
  },
  descrip: {
    type: String,
    maxLength: 30,
  },
});

module.exports = mongoose.model("Make", makesSchema);
