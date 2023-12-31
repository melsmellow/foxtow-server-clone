const mongoose = require("mongoose");

const towinvSchema = new mongoose.Schema({
  dispnum: Number,
  invoicenum: { type: String, maxlength: 10 },
  invdate: Date,
  itemgroup: { type: String, maxlength: 2 },
  ponumber: { type: String, maxlength: 22 },
  billtoact: { type: String, maxlength: 8 },
  billtoname: { type: String, maxlength: 30 },
  billtoaddr: { type: String, maxlength: 30 },
  billtoadd2: { type: String, maxlength: 30 },
  billtocity: { type: String, maxlength: 15 },
  billtost: { type: String, maxlength: 2 },
  billtozip: { type: String, maxlength: 10 },
  billtophon: { type: String, maxlength: 18 },
  billtocont: { type: String, maxlength: 12 },
  total: { type: mongoose.Decimal128, max: 9999999999999999.9999 },
  totalpaid: { type: mongoose.Decimal128, max: 9999999999999999.9999 },
  curbalance: { type: mongoose.Decimal128, max: 9999999999999999.9999 },
  total_dt: Date,
  totalpaid_dt: Date,
  computer_n: { type: String, maxlength: 50 },
  last_edit: Date,
  whenappend: Date,
  paytype: { type: String, maxlength: 3 },
  allowstora: Boolean,
  salestax: { type: mongoose.Decimal128, max: 9999999999999999.9999 },
  taxrate: { type: mongoose.Decimal128, max: 9999.999 },
  release_da: Date,
  release_ti: { type: String, maxlength: 5 },
  release_by: { type: String, maxlength: 14 },
  release_t2: { type: String, maxlength: 5 },
  kitnum: { type: String, maxlength: 3 },
  printinv_i: String,
  latefeeamt: { type: mongoose.Decimal128, max: 999999.99 },
  latefeeam2: { type: mongoose.Decimal128, max: 999999.99 },
  latefeedat: Date,
  latefeepos: Boolean,
  invcnt: Number,
  editbywho: { type: String, maxlength: 14 },
  source: { type: String, maxlength: 15 },
  drawer: Number,
  enterbywho: { type: String, maxlength: 14 },
  relpass: { type: String, maxlength: 6 },
  history: Boolean,
  discamttax: { type: mongoose.Decimal128, max: 9999999999999999.9999 },
  oldinvnum: { type: String, maxlength: 10 },
  hold: Boolean,
  datepaid: Date,
  lic_swipe1: String,
  lic_swipe2: String,
  voided: Boolean,
  claimnum: { type: String, maxlength: 20 },
  ins_auth_a: { type: mongoose.Decimal128, max: 9999999999999999.9999 },
  cc_zip: { type: String, maxlength: 5 },
  cc_address: { type: String, maxlength: 15 },
  foxtow_id: { type: String, maxlength: 10 },
  datesent: Date,
  sentstatus: { type: String, maxlength: 20 },
  batch: Number,
  milesto: Number,
  miles: Number,
  aaamemtype: { type: String, maxlength: 10 },
  authnum: { type: String, maxlength: 10 },
  aaahot: Boolean,
  aaapa: Boolean,
  aaafuel: Boolean,
  tif: { type: String, maxlength: 50 },
  glaccount: { type: String, maxlength: 12 },
  glsub: { type: String, maxlength: 5 },
  glposted: { type: String, maxlength: 60 },
  invdatetim: Date,
  subcontrac: { type: String, maxlength: 20 },
  fleet_num: { type: String, maxlength: 10 },
  readytogo: Boolean,
  locked: Boolean,
});

const Towinv = mongoose.model("Towinv", towinvSchema);

module.exports = Towinv;
