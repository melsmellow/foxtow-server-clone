const mongoose = require("mongoose");

const towtransSchema = new mongoose.Schema({
  dispnumtrs: Number,
  invoicenum: { type: String, maxlength: 10 },
  driver: { type: String, maxlength: 8 },
  trucknum: { type: String, maxlength: 4 },
  descriptio: { type: String, maxlength: 50 },
  quantity: { type: mongoose.Decimal128, max: 9999999999.99 },
  price: { type: mongoose.Decimal128, max: 9999999.9999 },
  compercent: { type: mongoose.Decimal128, max: 999999.99 },
  flatamount: { type: mongoose.Decimal128, max: 999999.99 },
  rtowrecord: Boolean,
  comamount: { type: mongoose.Decimal128, max: 999999.99 },
  glaccount: { type: String, maxlength: 12 },
  glsub: { type: String, maxlength: 5 },
  creationda: Date,
  computer_n: { type: String, maxlength: 50 },
  last_edit: Date,
  datepaidco: Date,
  whopaidcom: { type: String, maxlength: 14 },
  amtpaidcom: { type: mongoose.Decimal128, max: 999999.99 },
  computetim: Boolean,
  phantom: Boolean,
  taxable: Boolean,
  nodiscount: Boolean,
  itemnum: { type: String, maxlength: 8 },
  itemgroup: { type: String, maxlength: 2 },
  whenappend: Date,
  editbywho: { type: String, maxlength: 14 },
  drawer: Number,
  enterbywho: { type: String, maxlength: 14 },
  makecar: { type: String, maxlength: 12 },
  colorcar: { type: String, maxlength: 12 },
  modelcar: { type: String, maxlength: 15 },
  vin: { type: String, maxlength: 17 },
  licensenum: { type: String, maxlength: 7 },
  licensest: { type: String, maxlength: 2 },
  yearcar: { type: String, maxlength: 2 },
  received: { type: mongoose.Decimal128, max: 9999999.9999 },
  dispnumt: Number,
  transport: Boolean,
  odispnum: Number,
  towedfrom: { type: String, maxlength: 90 },
  towedto: { type: String, maxlength: 90 },
  keysinfo2: { type: String, maxlength: 30 },
  keysinfo3: { type: String, maxlength: 30 },
  callactnum: { type: String, maxlength: 8 },
  history: Boolean,
  advchg: Boolean,
  foxtow_id: { type: String, maxlength: 10 },
  houseprice: { type: mongoose.Decimal128, max: 9999999.9999 },
  housetow: Boolean,
  datesent: Date,
  sentstatus: { type: String, maxlength: 20 },
  batch: Number,
  glposted: { type: String, maxlength: 60 },
  profititem: Boolean,
  readytogo: Boolean,
  locked: Boolean,
  dispdrvi2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Towdrive",
    required: false,
  },
  dispinv2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Towinv",
    required: false,
  },
});

const Towtrans = mongoose.model("Towtrans", towtransSchema);

module.exports = Towtrans;
