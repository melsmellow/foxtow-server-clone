const mongoose = require("mongoose");

const changesSchema = new mongoose.Schema({
  dispnum: Number,
  whenappend: Date,
  explain: {
    type: String,
    maxlength: 25,
  },
  editbywho: {
    type: String,
    maxlength: 14,
  },
  drawer: Number,
  quantity: Number,
  price: Number,
  lienfee: Number,
  perday: Number,
  descriptio: {
    type: String,
    maxlength: 60,
  },
  computer_n: {
    type: String,
    maxlength: 50,
  },
  invoicenum: {
    type: String,
    maxlength: 10,
  },
  yearcar: {
    type: String,
    maxlength: 2,
  },
  makecar: {
    type: String,
    maxlength: 12,
  },
  driver: {
    type: String,
    maxlength: 8,
  },
  towtagnum: {
    type: String,
    maxlength: 10,
  },
  invdate: Date,
  oinvdate: Date,
  billtoact: {
    type: String,
    maxlength: 8,
  },
  salestax: Number,
  trucknum: {
    type: String,
    maxlength: 4,
  },
  modelcar: {
    type: String,
    maxlength: 15,
  },
  colorcar: {
    type: String,
    maxlength: 12,
  },
  towdate: Date,
  otowdate: Date,
  total: Number,
  olienfee: Number,
  ototal: Number,
  operday: Number,
  oquantity: Number,
  oeditbywho: {
    type: String,
    maxlength: 14,
  },
  odrawer: Number,
  oprice: Number,
  ocomputer_: {
    type: String,
    maxlength: 50,
  },
  oamount: Number,
  datepaid: Date,
  oinvoicenu: {
    type: String,
    maxlength: 10,
  },
  otowtagnum: {
    type: String,
    maxlength: 10,
  },
  amount: Number,
  datein: Date,
  odatein: Date,
  dateout: Date,
  odateout: Date,
  paytype: {
    type: String,
    maxlength: 3,
  },
  recorded_d: Date,
  day_ofweek: {
    type: String,
    maxlength: 10,
  },
  voided_pay: Boolean,
  password_f: Boolean,
  printed_in: Boolean,
});

const Changes = mongoose.model("Changes", changesSchema);

module.exports = Changes;
