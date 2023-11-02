const mongoose = require("mongoose");

const trucksSchema = new mongoose.Schema({
  trucknum: {
    type: String,
    required: true,
    maxLength: 4,
  },
  descript: {
    type: String,
    maxLength: 40,
  },
  licensenum: {
    type: String,
    maxLength: 7,
  },
  vin: {
    type: String,
    maxLength: 17,
  },
  date_pur: Date,
  pur_frmwho: {
    type: String,
    maxLength: 40,
  },
  miles_pur: {
    type: Number,
    min: 0,
    max: 999999999.9,
  },
  miles_now: {
    type: Number,
    min: 0,
    max: 999999999.9,
  },
  permits: {
    type: String,
    maxLength: 40,
  },
  truck_rem: {
    type: String,
    maxLength: 254,
  },
  talpha_pag: {
    type: String,
    maxLength: 20,
  },
  talpha_bas: {
    type: String,
    maxLength: 20,
  },
  talpha_pin: {
    type: String,
    maxLength: 20,
  },
  department: {
    type: String,
    maxLength: 2,
  },
  def_driver: {
    type: String,
    maxLength: 8,
  },
  creationda: Date,
  computer_n: {
    type: String,
    maxLength: 50,
  },
  last_edit: Date,
  whenappend: Date,
  trucktype: {
    type: String,
    maxLength: 3,
  },
  insurpmt: {
    type: Number,
    min: 0,
    max: 9999999999.99,
  },
  monthpmt: {
    type: Number,
    min: 0,
    max: 9999999999.99,
  },
  regpmt: {
    type: Number,
    min: 0,
    max: 9999999999.99,
  },
  policynumb: {
    type: String,
    maxLength: 30,
  },
  mdtmessage: String,
  mdtmessag2: Boolean,
  codenum: {
    type: String,
    maxLength: 5,
  },
  descriptio: {
    type: String,
    maxLength: 40,
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
  editbywho: {
    type: String,
    maxLength: 14,
  },
  estdistmon: {
    type: Number,
    min: 0,
    max: 999999999.9,
  },
  esttimemon: {
    type: Number,
    min: 0,
    max: 99999999999.99,
  },
  lastodoche: Date,
  lasttimech: Date,
  odoread: {
    type: Number,
    min: 0,
    max: 999999999.9,
  },
  timeread: {
    type: Number,
    min: 0,
    max: 99999999999.99,
  },
  owner: {
    type: String,
    maxLength: 30,
  },
  year: {
    type: String,
    maxLength: 2,
  },
  make: {
    type: String,
    maxLength: 12,
  },
  model: {
    type: String,
    maxLength: 15,
  },
  metric: Boolean,
  trackhours: Boolean,
  pager_email: {
    type: String,
    maxLength: 50,
  },
  messlen: {
    type: Number,
    min: 0,
    max: 2147483647, // Max value for INTEGER in PostgreSQL
  },
  mess_email: {
    type: Number,
    min: 0,
    max: 2147483647, // Max value for INTEGER in PostgreSQL
  },
  aaa_truckl: {
    type: String,
    maxLength: 2,
  },
  aaa_radion: {
    type: String,
    maxLength: 4,
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
  last_locat: {
    type: String,
    maxLength: 60,
  },
  glaccount: {
    type: String,
    maxLength: 12,
  },
  glsub: {
    type: String,
    maxLength: 5,
  },
  consumcity: {
    type: Number,
    min: 0,
    max: 9999999999.99,
  },
  consumhigh: {
    type: Number,
    min: 0,
    max: 9999999999.99,
  },
  fuelcost: {
    type: Number,
    min: 0,
    max: 9999999999999.9999,
  },
  flatfee_po: {
    type: Number,
    min: 0,
    max: 9999999999999.9999,
  },
  flatfee: {
    type: Number,
    min: 0,
    max: 9999999999999.9999,
  },
  flat_milef: {
    type: Number,
    min: 0,
    max: 9999999999999.9999,
  },
  available: {
    type: String,
    maxLength: 50,
  },
  in_route: {
    type: String,
    maxLength: 50,
  },
  in_tow: {
    type: String,
    maxLength: 50,
  },
  ar_service: {
    type: String,
    maxLength: 50,
  },
  at_tow_yar: {
    type: String,
    maxLength: 50,
  },
  off_duty: {
    type: String,
    maxLength: 50,
  },
  on_break: {
    type: String,
    maxLength: 50,
  },
  default: {
    type: String,
    maxLength: 50,
  },
  cleared_ti: Date,
  device_id: {
    type: String,
    maxLength: 20,
  },
  foxtow_id: {
    type: String,
    maxLength: 10,
  },
  subcontrac: {
    type: String,
    maxLength: 20,
  },
});

module.exports = mongoose.model("Truck", trucksSchema);
