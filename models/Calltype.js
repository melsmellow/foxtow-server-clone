const mongoose = require("mongoose");

const calltypeSchema = new mongoose.Schema({
  type: { type: String, maxlength: 1 },
  descrip: { type: String, maxlength: 45 },
  abbre: { type: String, maxlength: 10 },
});

const Calltype = mongoose.model("Calltype", calltypeSchema);

module.exports = Calltype;
