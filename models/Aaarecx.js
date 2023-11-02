const mongoose = require("mongoose");

const aaarecxSchema = new mongoose.Schema({
  data1: String,
  data2: String,
  data3: String,
  data4: String,
  svordnum: String,
  tcode: String,
  loc: String,
  adr: String,
  pum: String,
  name: String,
  notes: String,
  ac: String,
  qu: String,
  pg: String,
  ph: String,
  yearcar: String,
  makecar: String,
  modelcar: String,
  colorcar: String,
  sentover: Boolean,
  dispnum: Number,
  whenappend: Date,
  whensent: Date,
});

const AaaRecx = mongoose.model("AaaRecx", aaarecxSchema);

module.exports = AaaRecx;
