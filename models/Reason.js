const mongoose = require("mongoose");

const reasonSchema = new mongoose.Schema({
  reason: {
    type: String,
    maxLength: 20,
  },
  descrip: {
    type: String,
    maxLength: 45,
  },
  shortcut: {
    type: String,
    maxLength: 10,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  timeinterv: {
    type: Number,
    min: 0,
  },
  pushpin1: {
    type: String,
    maxLength: 50,
  },
  timeinter2: {
    type: Number,
    min: 0,
  },
  pushpin2: {
    type: String,
    maxLength: 50,
  },
  pushpin: {
    type: String,
    maxLength: 50,
  },
  mapgraphic: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Reason", reasonSchema);
