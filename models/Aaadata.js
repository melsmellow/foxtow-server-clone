const mongoose = require("mongoose");

// Define the schema
const aaadataSchema = new mongoose.Schema({
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
});

// Create a model based on the schema
module.exports = mongoose.model("AaaData", aaadataSchema);
