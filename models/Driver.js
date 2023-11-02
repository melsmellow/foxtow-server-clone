const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  driver_num: {
    type: String,
    maxLength: 8,
  },
  driver_fir: {
    type: String,
    maxLength: 15,
  },
  driver_las: {
    type: String,
    maxLength: 20,
  },
  driver_nam: {
    type: String,
    maxLength: 30,
  },
  driver_add: {
    type: String,
    maxLength: 30,
  },
  driver_ad2: {
    type: String,
    maxLength: 30,
  },
  driver_cit: {
    type: String,
    maxLength: 15,
  },
  driver_sta: {
    type: String,
    maxLength: 2,
  },
  driver_zip: {
    type: String,
    maxLength: 10,
  },
  driver_pho: {
    type: String,
    maxLength: 18,
  },
  driver_ssn: {
    type: String,
    maxLength: 11,
  },
  driver_lic: {
    type: String,
    maxLength: 18,
  },
  driver_lex: Date,
  driver_hir: Date,
  driver_lef: Date,
  driver_rem: {
    type: String,
    maxLength: 254,
  },
  driver_vpc: {
    type: Number,
    min: 0,
    max: 9999999.99,
  },
  driver_st2: {
    type: String,
    maxLength: 7,
  },
  driver_ond: Boolean,
  driver_onc: Boolean,
  driver_uni: {
    type: String,
    maxLength: 6,
  },
  dalpha_pag: {
    type: String,
    maxLength: 20,
  },
  dalpha_bas: {
    type: String,
    maxLength: 20,
  },
  dalpha_pin: {
    type: String,
    maxLength: 20,
  },
  department: {
    type: String,
    maxLength: 2,
  },
  def_truckn: {
    type: String,
    maxLength: 4,
  },
  creationda: Date,
  computer_n: {
    type: String,
    maxLength: 50,
  },
  whenappend: Date,
  last_edit: Date,
  birthdate: Date,
  editbywho: {
    type: String,
    maxLength: 14,
  },
  inrtwav: {
    type: String,
    maxLength: 30,
  },
  arrivewav: {
    type: String,
    maxLength: 30,
  },
  intowwav: {
    type: String,
    maxLength: 30,
  },
  ardstwav: {
    type: String,
    maxLength: 30,
  },
  clearwav: {
    type: String,
    maxLength: 30,
  },
  namewav: {
    type: String,
    maxLength: 30,
  },
  enterbywho: {
    type: String,
    maxLength: 14,
  },
  pager_emai: {
    type: String,
    maxLength: 50,
  },
  messlen: {
    type: Number,
    min: 0,
  },
  mess_email: {
    type: Number,
    min: 0,
  },
  glaccount: {
    type: String,
    maxLength: 12,
  },
  latitude: {
    type: Number,
    min: -90,
    max: 90,
  },
  longitude: {
    type: Number,
    min: -180,
    max: 180,
  },
  foxtow_id: {
    type: String,
    maxLength: 10,
  },
  rotation_v: {
    type: String,
    maxLength: 5,
  },
  contact_jo: {
    type: String,
    maxLength: 15,
  },
});

module.exports = mongoose.model("Driver", driverSchema);
