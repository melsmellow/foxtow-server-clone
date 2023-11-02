const mongoose = require("mongoose");

const auctionlSchema = new mongoose.Schema({
  auctiond: Date,
  auctionnum: { type: Number, min: 0 },
  dispnum: { type: Number, min: 0 },
  vin: { type: String, maxlength: 17 },
  licensenum: { type: String, maxlength: 7 },
  licensest: { type: String, maxlength: 2 },
  tagmonthye: { type: String, maxlength: 5 },
  makecar: { type: String, maxlength: 12 },
  modelcar: { type: String, maxlength: 15 },
  yearcar: { type: String, maxlength: 2 },
  colorcar: { type: String, maxlength: 12 },
});

const Auctionl = mongoose.model("Auctionl", auctionlSchema);

module.exports = Auctionl;
