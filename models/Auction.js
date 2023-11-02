const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({
  donor: { type: String, maxlength: 30 },
  descrip: { type: String, maxlength: 35 },
  itemnum: { type: Number, min: 0, max: 32767 },
  value: { type: mongoose.Decimal128, min: 0, max: 99999999.99 },
  highbid: { type: Number, min: 0, max: 32767 },
  bidamt: { type: mongoose.Decimal128, min: 0, max: 99999999.99 },
});

const Auction = mongoose.model("Auction", auctionSchema);

module.exports = Auction;
