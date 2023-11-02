const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  custnum: {
    type: String,
    maxLength: 8,
  },
  custtype: {
    type: String,
    maxLength: 1,
  },
  custname: {
    type: String,
    maxLength: 30,
  },
  custaddr1: {
    type: String,
    maxLength: 30,
  },
  custaddr2: {
    type: String,
    maxLength: 30,
  },
  custcity: {
    type: String,
    maxLength: 15,
  },
  custstate: {
    type: String,
    maxLength: 2,
  },
  custzip: {
    type: String,
    maxLength: 10,
  },
  phone1: {
    type: String,
    maxLength: 18,
  },
  phone2: {
    type: String,
    maxLength: 18,
  },
  mobile: {
    type: String,
    maxLength: 18,
  },
  faxnum: {
    type: String,
    maxLength: 13,
  },
  contact: {
    type: String,
    maxLength: 20,
  },
  def_towfrm: {
    type: String,
    maxLength: 40,
  },
  def_towto: {
    type: String,
    maxLength: 40,
  },
  groupcust: {
    type: String,
    maxLength: 1,
  },
  creditlimi: {
    type: Number,
    min: 0,
  },
  porequire: String,
  priority: {
    type: String,
    maxLength: 2,
  },
  curbalance: {
    type: Number,
    min: 0,
  },
  remarks: String,
  allowchg: String,
  creationda: Date,
  computer_n: {
    type: String,
    maxLength: 50,
  },
  last_edit: Date,
  taxrate: {
    type: Number,
    min: 0,
  },
  discount: {
    type: Number,
    min: 0,
  },
  storagetyp: {
    type: String,
    maxLength: 2,
  },
  nostatemen: Boolean,
  smtow: Boolean,
  clubtow: Boolean,
  testx: {
    type: String,
    maxLength: 10,
  },
  editbywho: {
    type: String,
    maxLength: 14,
  },
  nolabels: Boolean,
  kitnum: {
    type: String,
    maxLength: 3,
  },
  webaddress: {
    type: String,
    maxLength: 40,
  },
  notonarage: Boolean,
  birthdate: Date,
  instructio: String,
  custeta: {
    type: String,
    maxLength: 3,
  },
  email_addr: {
    type: String,
    maxLength: 40,
  },
  email_add2: {
    type: String,
    maxLength: 40,
  },
  dispatchno: String,
  latitude: {
    type: Number,
    min: -2147483648, // Min value for INTEGER in PostgreSQL
    max: 2147483647, // Max value for INTEGER in PostgreSQL
  },
  longitude: {
    type: Number,
    min: -2147483648, // Min value for INTEGER in PostgreSQL
    max: 2147483647, // Max value for INTEGER in PostgreSQL
  },
  milesprice: {
    type: Number,
    min: 0,
  },
  towprice: {
    type: Number,
    min: 0,
  },
  qtyfree: {
    type: Number,
    min: 0,
  },
  mapcord: {
    type: String,
    maxLength: 8,
  },
  area: {
    type: String,
    maxLength: 20,
  },
  glaccount: {
    type: String,
    maxLength: 12,
  },
  glsub: {
    type: String,
    maxLength: 5,
  },
  directions: String,
  inactive: Boolean,
  btemp: {
    type: String,
    maxLength: 15,
  },
  foxtow_id: {
    type: String,
    maxLength: 10,
  },
  contact_jo: {
    type: String,
    maxLength: 15,
  },
  _nullflags: {
    type: String,
    maxLength: 1,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
