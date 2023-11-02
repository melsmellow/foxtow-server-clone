const mongoose = require("mongoose");

const aaasysSchema = new mongoose.Schema({
  comport: String,
  intimeout: Number,
  inputlen: Number,
  rthreshold: Number,
  miles_topr: Number,
  miles_tofr: Number,
  baserate: Number,
  baserate2: Number,
  plus_miles: Number,
  plus_mile2: Number,
  plus_tear1: Number,
  plus_mile3: Number,
  plus_tear2: Number,
  basic_mile: Number,
  cod_milest: Number,
  cod_tear1p: Number,
  cod_miles2: Number,
  cod_tear2p: Number,
  codactnum: String,
  baseratein: Boolean,
  baseratei2: Boolean,
  station1: String,
  station2: String,
  station3: String,
  plus_tear3: Number,
  plus_tear4: Number,
  premier_mi: Number,
  premier_m2: Number,
  premier_m3: Number,
  premier_te: Number,
  premier_t2: Number,
  premier_t3: Number,
  premier_t4: Number,
});

const AaaSys = mongoose.model("AaaSys", aaasysSchema);

module.exports = AaaSys;
