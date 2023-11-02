const mongoose = require("mongoose");

const batchselSchema = new mongoose.Schema({
  dispnum: { type: Number, min: 0 },
  name: { type: String, maxlength: 30 },
  addr1: { type: String, maxlength: 30 },
  addr2: { type: String, maxlength: 30 },
  city: { type: String, maxlength: 15 },
  state: { type: String, maxlength: 2 },
  zip: { type: String, maxlength: 10 },
  contact: { type: String, maxlength: 18 },
  phone: { type: String, maxlength: 12 },
  amount: { type: mongoose.Decimal128, min: 0, max: 99999999.9999 },
});

const Batchsel = mongoose.model("Batchsel", batchselSchema);

module.exports = Batchsel;
