const mongoose = require("mongoose");

const bodysSchema = new mongoose.Schema({
  body: { type: String, maxlength: 2 },
  descrip: { type: String, maxlength: 40 },
});

const Bodys = mongoose.model("Bodys", bodysSchema);

module.exports = Bodys;
