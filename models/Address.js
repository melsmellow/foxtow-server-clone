const mongoose = require("mongoose");

const addressesSchema = new mongoose.Schema({
  addressid: Number,
  firstname: { type: String, maxlength: 50 },
  lastname: { type: String, maxlength: 50 },
  spousename: { type: String, maxlength: 50 },
  address: String,
  city: { type: String, maxlength: 50 },
  stateorpro: { type: String, maxlength: 20 },
  postalcode: { type: String, maxlength: 20 },
  country: { type: String, maxlength: 50 },
  emailaddre: { type: String, maxlength: 50 },
  homephone: { type: String, maxlength: 30 },
  workphone: { type: String, maxlength: 30 },
  workextens: { type: String, maxlength: 20 },
  faxnumber: { type: String, maxlength: 30 },
  birthdate: Date,
  sendcard: Boolean,
  notes: String,
});

const Addresses = mongoose.model("Addresses", addressesSchema);

module.exports = Addresses;
